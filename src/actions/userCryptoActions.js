import { cryptoActions } from '../store/crypto-slice';
import { DATABASE_BASE_URL } from '../helpers/constants';

export const addCrypto = crypto => {
  return (dispatch, getState) => {
    const state = getState();
    return fetch(
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
      .then(result => {
        dispatch(
          cryptoActions.addCrypto({
            ...crypto,
            generatedId: result.name,
          })
        );
      });
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
