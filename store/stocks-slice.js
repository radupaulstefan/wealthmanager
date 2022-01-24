import { createSlice } from '@reduxjs/toolkit';

const initialStocksState = { items: [] };

const stocksSlice = createSlice({
  name: 'stocks',
  initialState: initialStocksState,
  reducers: {
    addStock(state, action) {
      state.items.push(action.payload);
    },
    deleteStock(state, action) {
      state.items = state.items.filter(
        el => el.symbol !== action.payload.symbol
      );
    },
    setStocks(state, action) {
      state.items = action.payload;
    },
    modifyStockUnits(state, action) {
      state.items.find(el => el.symbol === action.payload.symbol).units =
        action.payload.units;
    },
  },
});

export const stocksActions = stocksSlice.actions;
export default stocksSlice.reducer;
