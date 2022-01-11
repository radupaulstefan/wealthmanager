import { cashActions } from '../store/cash-slice';
import { DATABASE_BASE_URL } from '../helpers/constants';
import { helpFetchCashAssets } from '../helpers/cashAssetsHelper';
import {
  helpDeleteMarketAsset,
  helpAddMarketAsset,
  helpChangeMarketAssetsUnits,
} from '../helpers/marketAssetsHelper';

export const addCash = cash => {
  return (dispatch, getState) => {
    const state = getState();
    return helpAddMarketAsset(
      cash,
      dispatch,
      cashActions.addCash,
      `/users/${state.currentUser.userUID}/netWorth/cash.json`
    );
  };
};

export const fetchCash = dispatch => {
  return (dispatch, getState) => {
    const state = getState();
    helpFetchCashAssets(
      dispatch,
      cashActions.setCash,
      `/users/${state.currentUser.userUID}/netWorth/cash.json`
    );
  };
};

export const deleteCash = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const cashToDelete = state.cash.items.find(el => el.symbol === symbol);
    return helpDeleteMarketAsset(
      cashToDelete,
      dispatch,
      cashActions.deleteCash,
      `/users/${state.currentUser.userUID}/netWorth/cash`
    );
  };
};

export const changeCashUnits = (symbol, newUnits) => {
  return (dispatch, getState) => {
    const state = getState();
    const cashToChange = state.cash.items.find(el => el.symbol === symbol);
    return helpChangeMarketAssetsUnits(
      cashToChange,
      newUnits,
      dispatch,
      cashActions.modifyCashUnits,
      `/users/${state.currentUser.userUID}/netWorth/cash`
    );
  };
};

export const incrementCashUnits = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const cashToChange = state.cash.items.find(el => el.symbol === symbol);
    return helpChangeMarketAssetsUnits(
      cashToChange,
      +cashToChange + 1,
      dispatch,
      cashActions.modifyCashUnits,
      `/users/${state.currentUser.userUID}/netWorth/cash`
    );
  };
};

export const decrementCashUnits = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const cashToChange = state.cash.items.find(el => el.symbol === symbol);
    return helpChangeMarketAssetsUnits(
      cashToChange,
      +cashToChange - 1,
      dispatch,
      cashActions.modifyCashUnits,
      `/users/${state.currentUser.userUID}/netWorth/cash`
    );
  };
};

export const changeInterestRate = (symbol, newInterestRate) => {
  return (dispatch, getState) => {
    const state = getState();
    const cashToChange = state.cash.items.find(el => el.symbol === symbol);
    if (newInterestRate >= 0)
      return fetch(
        DATABASE_BASE_URL +
          `/users/${state.currentUser.userUID}/netWorth/cash/${cashToChange.generatedId}/.json`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            interestRate: newInterestRate,
          }),
        }
      )
        .then(response => response.json())
        .then(result => {
          dispatch(
            cashActions.modifyInterestRate({
              symbol: symbol,
              interestRate: +newInterestRate,
            })
          );
        });
  };
};

export const incrementInterestRate = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const cashToChange = state.cash.items.find(el => el.symbol === symbol);
    return fetch(
      DATABASE_BASE_URL +
        `/users/${state.currentUser.userUID}/netWorth/cash/${cashToChange.generatedId}/.json`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          interestRate: +cashToChange.interestRate + 0.1,
        }),
      }
    )
      .then(response => response.json())
      .then(result => {
        dispatch(
          cashActions.modifyInterestRate({
            symbol: symbol,
            interestRate: +cashToChange.interestRate + 0.1,
          })
        );
      });
  };
};

export const decrementInterestRate = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const cashToChange = state.cash.items.find(el => el.symbol === symbol);
    if (+cashToChange.interestRate - 1 >= 0)
      return fetch(
        DATABASE_BASE_URL +
          `/users/${state.currentUser.userUID}/netWorth/cash/${cashToChange.generatedId}/.json`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            interestRate: +cashToChange.interestRate - 0.1,
          }),
        }
      )
        .then(response => response.json())
        .then(result => {
          dispatch(
            cashActions.modifyInterestRate({
              symbol: symbol,
              interestRate: +cashToChange.interestRate - 0.1,
            })
          );
        });
  };
};
