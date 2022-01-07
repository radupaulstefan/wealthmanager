import { createSlice } from '@reduxjs/toolkit';

const initialCryptoState = { items: [] };

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
    modifyCryptoUnits(state, action) {
      state.items.find(el => el.symbol === action.payload.symbol).units =
        action.payload.units;
    },
  },
});

export const cryptoActions = cryptoSlice.actions;
export default cryptoSlice.reducer;
