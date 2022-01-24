import { createSlice } from '@reduxjs/toolkit';

const initialCashState = { items: [] };

const cashSlice = createSlice({
  name: 'cash',
  initialState: initialCashState,
  reducers: {
    addCash(state, action) {
      state.items.push(action.payload);
    },
    deleteCash(state, action) {
      state.items = state.items.filter(
        el => el.symbol !== action.payload.symbol
      );
    },
    setCash(state, action) {
      state.items = action.payload;
    },
    modifyCashUnits(state, action) {
      state.items.find(el => el.symbol === action.payload.symbol).units =
        action.payload.units;
    },
    modifyInterestRate(state, action) {
      state.items.find(el => el.symbol === action.payload.symbol).interestRate =
        action.payload.interestRate.toFixed(1);
    },
  },
});

export const cashActions = cashSlice.actions;
export default cashSlice.reducer;
