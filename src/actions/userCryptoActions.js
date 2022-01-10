import { cryptoActions } from '../store/crypto-slice';
import { DATABASE_BASE_URL } from '../helpers/constants';

export const getCryptoCoinPrice = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const cryptoItem = state.crypto.cryptoList.find(
      el => el.symbol === symbol.toLowerCase()
    );
    console.log(cryptoItem);
    return fetch(
      'https://api.coingecko.com/api/v3' +
        `/simple/price?ids=${cryptoItem.id}&vs_currencies=usd`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => response.json())
      .then(result => {
        dispatch(
          cryptoActions.setCryptoPrice({
            symbol: symbol,
            price: Object.values(result)[0].usd,
          })
        );
      });
  };
};

export const addCryptoList = () => {
  return (dispatch, getState) => {
    const state = getState();

    return fetch('https://api.coingecko.com/api/v3' + `/coins/list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => dispatch(cryptoActions.setCryptoList(result)));
  };
};

export const addCrypto = crypto => {
  return (dispatch, getState) => {
    const state = getState();
    const cryptoItem = state.crypto.cryptoList.find(
      el => el.symbol === crypto.symbol.toLowerCase()
    );
    crypto.symbol = crypto.symbol.toLowerCase();
    if (cryptoItem !== undefined) {
      return fetch(
        'https://api.coingecko.com/api/v3' +
          `/simple/price?ids=${cryptoItem.id}&vs_currencies=usd`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then(response => response.json())
        .then(result => {
          crypto.price = Object.values(result)[0].usd;
          fetch(
            DATABASE_BASE_URL +
              `/users/${state.currentUser.userUID}/netWorth/crypto.json`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(crypto),
            }
          )
            .then(response => response.json())
            .then(secondResult => {
              dispatch(
                cryptoActions.addCrypto({
                  ...crypto,
                  generatedId: secondResult.name,
                })
              );
            });
        });
    }
  };
};

export const fetchCrypto = () => {
  return (dispatch, getState) => {
    const state = getState();
    fetch(
      DATABASE_BASE_URL +
        `/users/${state.currentUser.userUID}/netWorth/crypto.json`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => response.json())
      .then(result => {
        if (result) {
          const keys = Object.keys(result);
          dispatch(
            cryptoActions.setCrypto(
              Object.values(result).map((el, index) => ({
                generatedId: keys[index],
                units: el.units,
                symbol: el.symbol,
                price: el.price,
              }))
            )
          );
        }
      });
  };
};

export const deleteCrypto = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const cryptoToDelete = state.crypto.items.find(el => el.symbol === symbol);
    return fetch(
      DATABASE_BASE_URL +
        `/users/${state.currentUser.userUID}/netWorth/crypto/${cryptoToDelete.generatedId}.json`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => response.json())
      .then(result => {
        dispatch(cryptoActions.deleteCrypto(cryptoToDelete));
      });
  };
};

export const changeCryptoUnits = (symbol, newUnits) => {
  return (dispatch, getState) => {
    const state = getState();
    const cryptoToChange = state.crypto.items.find(el => el.symbol === symbol);
    if (newUnits >= 0)
      return fetch(
        DATABASE_BASE_URL +
          `/users/${state.currentUser.userUID}/netWorth/crypto/${cryptoToChange.generatedId}/.json`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            units: newUnits,
          }),
        }
      )
        .then(response => response.json())
        .then(result => {
          dispatch(
            cryptoActions.modifyCryptoUnits({
              symbol: symbol,
              units: newUnits,
            })
          );
        });
  };
};

export const incrementCryptoUnits = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const cryptoToChange = state.crypto.items.find(el => el.symbol === symbol);
    return fetch(
      DATABASE_BASE_URL +
        `/users/${state.currentUser.userUID}/netWorth/crypto/${cryptoToChange.generatedId}/.json`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          units: +cryptoToChange.units + 1,
        }),
      }
    )
      .then(response => response.json())
      .then(result => {
        dispatch(
          cryptoActions.modifyCryptoUnits({
            symbol: symbol,
            units: +cryptoToChange.units + 1,
          })
        );
      });
  };
};

export const decrementCryptoUnits = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const cryptoToChange = state.crypto.items.find(el => el.symbol === symbol);
    if (+cryptoToChange.units - 1 >= 0)
      return fetch(
        DATABASE_BASE_URL +
          `/users/${state.currentUser.userUID}/netWorth/crypto/${cryptoToChange.generatedId}/.json`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            units: +cryptoToChange.units - 1,
          }),
        }
      )
        .then(response => response.json())
        .then(result => {
          dispatch(
            cryptoActions.modifyCryptoUnits({
              symbol: symbol,
              units: +cryptoToChange.units - 1,
            })
          );
        });
  };
};
