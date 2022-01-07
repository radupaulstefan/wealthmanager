import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homePageStocksReducer from './homePageStocks-slice';
import currentUserReducer from './currentUser-slice';
import cashReducer from './cash-slice';
import stocksReducer from './stocks-slice';
import cryptoReducer from './crypto-slice';
import { CLEAR_REDUX } from '../helpers/constants';

const combinedReducers = combineReducers({
  homePageStocks: homePageStocksReducer,
  currentUser: currentUserReducer,
  cash: cashReducer,
  stocks: stocksReducer,
  crypto: cryptoReducer,
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_REDUX) {
    state = undefined;
  }
  return combinedReducers(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
