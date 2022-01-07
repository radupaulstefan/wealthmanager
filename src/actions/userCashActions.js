import { cashActions } from '../store/cash-slice';
import { DATABASE_BASE_URL } from '../helpers/constants';

export const addCash = cash => {
  return (dispatch, getState) => {
    const state = getState();
    return fetch(
      DATABASE_BASE_URL +
        `/users/${state.currentUser.userUID}/netWorth/cash.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cash),
      }
    )
      .then(response => response.json())
      .then(result => {
        dispatch(
          cashActions.addCash({
            ...cash,
            generatedId: result.name,
          })
        );
      });
  };
};

export const fetchCash = () => {
  return (dispatch, getState) => {
    const state = getState();
    fetch(
      DATABASE_BASE_URL +
        `/users/${state.currentUser.userUID}/netWorth/cash.json`,
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
            cashActions.setCash(
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
};

export const deleteCash = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const cashToDelete = state.cash.items.find(el => el.symbol === symbol);
    return fetch(
      DATABASE_BASE_URL +
        `/users/${state.currentUser.userUID}/netWorth/cash/${cashToDelete.generatedId}.json`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => response.json())
      .then(result => {
        dispatch(cashActions.deleteCash(cashToDelete));
      });
  };
};

export const changeCashUnits = (symbol, newUnits) => {
  return (dispatch, getState) => {
    const state = getState();
    const cashToChange = state.cash.items.find(el => el.symbol === symbol);
    if (newUnits >= 0)
      return fetch(
        DATABASE_BASE_URL +
          `/users/${state.currentUser.userUID}/netWorth/cash/${cashToChange.generatedId}/.json`,
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
            cashActions.modifyCashUnits({
              symbol: symbol,
              units: newUnits,
            })
          );
        });
  };
};

export const incrementCashUnits = symbol => {
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
          units: +cashToChange.units + 1,
        }),
      }
    )
      .then(response => response.json())
      .then(result => {
        dispatch(
          cashActions.modifyCashUnits({
            symbol: symbol,
            units: +cashToChange.units + 1,
          })
        );
      });
  };
};

export const decrementCashUnits = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const cashToChange = state.cash.items.find(el => el.symbol === symbol);
    if (+cashToChange.units - 1 >= 0)
      return fetch(
        DATABASE_BASE_URL +
          `/users/${state.currentUser.userUID}/netWorth/cash/${cashToChange.generatedId}/.json`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            units: +cashToChange.units - 1,
          }),
        }
      )
        .then(response => response.json())
        .then(result => {
          dispatch(
            cashActions.modifyCashUnits({
              symbol: symbol,
              units: +cashToChange.units - 1,
            })
          );
        });
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
