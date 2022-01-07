import { createSlice } from '@reduxjs/toolkit';

const initialHomePageStocksState = {
  graphData: [],
  tableData: [],
  currentStock: '',
};
const homePageStocksSlice = createSlice({
  name: 'homePageStocks',
  initialState: initialHomePageStocksState,
  reducers: {
    setCurrentStock(state, action) {
      state.currentStock = action.payload;
    },
    setTableData(state, action) {
      state.tableData = action.payload;
    },
    setGraphData(state, action) {
      state.graphData = action.payload;
    },
  },
});

export const homePageStocksActions = homePageStocksSlice.actions;
export default homePageStocksSlice.reducer;
