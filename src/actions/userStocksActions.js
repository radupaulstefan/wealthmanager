import { stocksActions } from '../store/stocks-slice';
import { DATABASE_BASE_URL } from '../helpers/constants';

export const addStock = stock => {
  return (dispatch, getState) => {
    const state = getState();
    return fetch(
      DATABASE_BASE_URL +
        `/users/${state.currentUser.userUID}/netWorth/stocks.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stock),
      }
    )
      .then(response => response.json())
      .then(result => {
        dispatch(
          stocksActions.addStock({
            ...stock,
            generatedId: result.name,
          })
        );
      });
  };
};

export const fetchStocks = () => {
  return (dispatch, getState) => {
    const state = getState();
    fetch(
      DATABASE_BASE_URL +
        `/users/${state.currentUser.userUID}/netWorth/stocks.json`,
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
            stocksActions.setStocks(
              Object.values(result).map((el, index) => ({
                generatedId: keys[index],
                price: el.price,
                symbol: el.symbol,
                units: el.units,
              }))
            )
          );
        }
      });
  };
};

export const deleteStock = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const stockToDelete = state.stocks.items.find(el => el.symbol === symbol);
    return fetch(
      DATABASE_BASE_URL +
        `/users/${state.currentUser.userUID}/netWorth/stocks/${stockToDelete.generatedId}.json`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => response.json())
      .then(result => {
        dispatch(stocksActions.deleteStock(stockToDelete));
      });
  };
};

export const changeStockUnits = (symbol, newUnits) => {
  return (dispatch, getState) => {
    const state = getState();
    const stockToChange = state.stocks.items.find(el => el.symbol === symbol);
    if (newUnits >= 0)
      return fetch(
        DATABASE_BASE_URL +
          `/users/${state.currentUser.userUID}/netWorth/stocks/${stockToChange.generatedId}/.json`,
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
            stocksActions.modifyStockUnits({
              symbol: symbol,
              units: newUnits,
            })
          );
        });
  };
};

export const incrementStockUnits = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const stockToChange = state.stocks.items.find(el => el.symbol === symbol);
    return fetch(
      DATABASE_BASE_URL +
        `/users/${state.currentUser.userUID}/netWorth/stocks/${stockToChange.generatedId}/.json`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          units: +stockToChange.units + 1,
        }),
      }
    )
      .then(response => response.json())
      .then(result => {
        dispatch(
          stocksActions.modifyStockUnits({
            symbol: symbol,
            units: +stockToChange.units + 1,
          })
        );
      });
  };
};

export const decrementStockUnits = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const stockToChange = state.stocks.items.find(el => el.symbol === symbol);
    if (+stockToChange.units - 1 >= 0)
      return fetch(
        DATABASE_BASE_URL +
          `/users/${state.currentUser.userUID}/netWorth/stocks/${stockToChange.generatedId}/.json`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            units: +stockToChange.units - 1,
          }),
        }
      )
        .then(response => response.json())
        .then(result => {
          dispatch(
            stocksActions.modifyStockUnits({
              symbol: symbol,
              units: +stockToChange.units - 1,
            })
          );
        });
  };
};
