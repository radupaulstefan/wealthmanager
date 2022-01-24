import { DATABASE_BASE_URL } from './constants';

export const helpFetchCashAssets = (dispatch, dispatchAction, path) => {
  fetch(DATABASE_BASE_URL + path, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(result => {
      if (result) {
        const keys = Object.keys(result);
        dispatch(
          dispatchAction(
            Object.values(result).map((el, index) => ({
              generatedId: keys[index],
              units: el.units,
              symbol: el.symbol,
              interestRate: el.interestRate,
            }))
          )
        );
      }
    });
};
