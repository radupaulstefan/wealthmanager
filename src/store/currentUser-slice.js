import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  userLoggedIn: false,
  userTokenId: null,
  userDisplayName: null,
  userUID: null,
  userInfo: {
    id: 0,
    netWorth: {
      stocks: [],
      crypto: [],
      realEstate: [],
      cash: [],
      commodities: [],
    },
    budgetTracker: {
      incomes: [],
      expanses: [],
    },
    myPlanner: {
      calendar: null,
      toDoList: [],
      today: null,
    },
  },
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: initialUserState,
  reducers: {
    setUserLoggedIn(state, action) {
      state.userLoggedIn = action.payload;
    },
    setUserTokenId(state, action) {
      state.userTokenId = action.payload;
    },
    setUserDisplayName(state, action) {
      state.userDisplayName = action.payload;
    },
    setUserUID(state, action) {
      state.userUID = action.payload;
    },
    addUserNetWorthStock(state, action) {
      state.userInfo.netWorth.stocks.push(action.payload);
    },
    deleteUserNetWorthStock(state, action) {
      state.userInfo.netWorth.stocks = state.userInfo.netWorth.stocks.filter(
        el => el.symbol !== action.payload.symbol
      );
    },
    setUserNetWorthStocks(state, action) {
      state.userInfo.netWorth.stocks = action.payload;
    },
    modifyUserNetWorthStockUnits(state, action) {
      state.userInfo.netWorth.stocks.find(
        el => el.symbol === action.payload.symbol
      ).units = action.payload.units;
    },
  },
});

export const currentUserActions = currentUserSlice.actions;
export default currentUserSlice.reducer;
