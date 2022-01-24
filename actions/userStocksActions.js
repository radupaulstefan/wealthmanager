import { stocksActions } from '../store/stocks-slice';
import {
  helpFetchMarketAssets,
  helpDeleteMarketAsset,
  helpAddMarketAsset,
  helpChangeMarketAssetsUnits,
} from '../helpers/marketAssetsHelper';

export const addStock = stock => {
  return (dispatch, getState) => {
    const state = getState();
    return helpAddMarketAsset(
      stock,
      dispatch,
      stocksActions.addStock,
      `/users/${state.currentUser.userUID}/netWorth/stocks.json`
    );
  };
};

export const fetchStocks = () => {
  return (dispatch, getState) => {
    const state = getState();
    helpFetchMarketAssets(
      dispatch,
      stocksActions.setStocks,
      `/users/${state.currentUser.userUID}/netWorth/stocks.json`
    );
  };
};

export const deleteStock = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const stockToDelete = state.stocks.items.find(el => el.symbol === symbol);
    return helpDeleteMarketAsset(
      stockToDelete,
      dispatch,
      stocksActions.deleteStock,
      `/users/${state.currentUser.userUID}/netWorth/stocks`
    );
  };
};

export const changeStockUnits = (symbol, newUnits) => {
  return (dispatch, getState) => {
    const state = getState();
    const stockToChange = state.stocks.items.find(el => el.symbol === symbol);

    return helpChangeMarketAssetsUnits(
      stockToChange,
      newUnits,
      dispatch,
      stocksActions.modifyStockUnits,
      `/users/${state.currentUser.userUID}/netWorth/stocks`
    );
  };
};

export const incrementStockUnits = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const stockToChange = state.stocks.items.find(el => el.symbol === symbol);
    return helpChangeMarketAssetsUnits(
      stockToChange,
      +stockToChange.units + 1,
      dispatch,
      stocksActions.modifyStockUnits,
      `/users/${state.currentUser.userUID}/netWorth/stocks`
    );
  };
};

export const decrementStockUnits = symbol => {
  return (dispatch, getState) => {
    const state = getState();
    const stockToChange = state.stocks.items.find(el => el.symbol === symbol);

    return helpChangeMarketAssetsUnits(
      stockToChange,
      +stockToChange.units - 1,
      dispatch,
      stocksActions.modifyStockUnits,
      `/users/${state.currentUser.userUID}/netWorth/stocks`
    );
  };
};
