import { configureStore } from '@reduxjs/toolkit';
import stocksReducer from './stocks-slice';
import currentUserReducer from './currentUser-slice';

const store = configureStore({
  reducer: { stocks: stocksReducer, currentUser: currentUserReducer },
});

export default store;
