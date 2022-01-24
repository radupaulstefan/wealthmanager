import { DATABASE_BASE_URL } from './constants';

export const helpFetchMarketAssets = (dispatch, dispatchAction, path) => {
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
              price: el.price,
            }))
          )
        );
      }
    });
};

export const helpDeleteMarketAsset = (
  toDelete,
  dispatch,
  dispatchAction,
  path
) => {
  fetch(DATABASE_BASE_URL + path + `/${toDelete.generatedId}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(result => {
      dispatch(dispatchAction(toDelete));
    });
};

export const helpAddMarketAsset = (asset, dispatch, dispatchAction, path) => {
  fetch(DATABASE_BASE_URL + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(asset),
  })
    .then(response => response.json())
    .then(result => {
      dispatch(
        dispatchAction({
          ...asset,
          generatedId: result.name,
        })
      );
    });
};

export const helpChangeMarketAssetsUnits = (
  toChange,
  newUnits,
  dispatch,
  dispatchAction,
  path
) => {
  if (newUnits >= 0)
    fetch(DATABASE_BASE_URL + path + `/${toChange.generatedId}/.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        units: newUnits,
      }),
    })
      .then(response => response.json())
      .then(result => {
        dispatch(
          dispatchAction({
            symbol: toChange.symbol,
            units: newUnits,
          })
        );
      });
};
