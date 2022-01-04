import { createSlice } from '@reduxjs/toolkit';

const initialStocksState = {
  graphData: [],
  tableData: [],
  currentStock: '',
};
const stocksSlice = createSlice({
  name: 'stocks',
  initialState: initialStocksState,
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

export const stocksActions = stocksSlice.actions;
export default stocksSlice.reducer;
