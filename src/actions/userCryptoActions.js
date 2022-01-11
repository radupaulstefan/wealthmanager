import { cryptoActions } from '../store/crypto-slice';
import {
  helpFetchMarketAssets,
  helpDeleteMarketAsset,
  helpAddMarketAsset,
  helpChangeMarketAssetsUnits,
} from '../helpers/marketAssetsHelper';

export const getCryptoCoinPrice = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const cryptoItem = state.crypto.cryptoList.find(
      el => el.symbol === symbol.toLowerCase()
    );
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

export const getAllCryptoList = () => {
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
          helpAddMarketAsset(
            crypto,
            dispatch,
            cryptoActions.addCrypto,
            `/users/${state.currentUser.userUID}/netWorth/crypto.json`
          );
        });
    }
  };
};

export const fetchCrypto = () => {
  return (dispatch, getState) => {
    const state = getState();
    helpFetchMarketAssets(
      dispatch,
      cryptoActions.setCrypto,
      `/users/${state.currentUser.userUID}/netWorth/crypto.json`
    );
  };
};

export const deleteCrypto = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const cryptoToDelete = state.crypto.items.find(el => el.symbol === symbol);
    return helpDeleteMarketAsset(
      cryptoToDelete,
      dispatch,
      cryptoActions.deleteCrypto,
      `/users/${state.currentUser.userUID}/netWorth/crypto`
    );
  };
};

export const changeCryptoUnits = (symbol, newUnits) => {
  return (dispatch, getState) => {
    const state = getState();
    const cryptoToChange = state.crypto.items.find(el => el.symbol === symbol);
    return helpChangeMarketAssetsUnits(
      cryptoToChange,
      newUnits,
      dispatch,
      cryptoActions.modifyCryptoUnits,
      `/users/${state.currentUser.userUID}/netWorth/crypto`
    );
  };
};

export const incrementCryptoUnits = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const cryptoToChange = state.crypto.items.find(el => el.symbol === symbol);
    return helpChangeMarketAssetsUnits(
      cryptoToChange,
      +cryptoToChange.units + 1,
      dispatch,
      cryptoActions.modifyCryptoUnits,
      `/users/${state.currentUser.userUID}/netWorth/crypto`
    );
  };
};

export const decrementCryptoUnits = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const cryptoToChange = state.crypto.items.find(el => el.symbol === symbol);

    return helpChangeMarketAssetsUnits(
      cryptoToChange,
      +cryptoToChange.units - 1,
      dispatch,
      cryptoActions.modifyCryptoUnits,
      `/users/${state.currentUser.userUID}/netWorth/crypto`
    );
  };
};
