import { createSlice } from '@reduxjs/toolkit';

const initialCryptoState = { items: [], cryptoList: [] };

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: initialCryptoState,
  reducers: {
    addCrypto(state, action) {
      state.items.push(action.payload);
    },
    deleteCrypto(state, action) {
      state.items = state.items.filter(
        el => el.symbol !== action.payload.symbol
      );
    },
    setCrypto(state, action) {
      state.items = action.payload;
    },
    setCryptoPrice(state, action) {
      state.items.find(el => el.symbol === action.payload.symbol).price =
        action.payload.price;
    },
    setCryptoList(state, action) {
      state.cryptoList = action.payload;
    },
    modifyCryptoUnits(state, action) {
      state.items.find(el => el.symbol === action.payload.symbol).units =
        action.payload.units;
    },
  },
});

export const cryptoActions = cryptoSlice.actions;
export default cryptoSlice.reducer;
