import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  userLoggedIn: false,
  userTokenId: null,
  userDisplayName: null,
  userUID: null,
  homePageMode: true,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: initialUserState,
  reducers: {
    logout(state, action) {},
    setUserLoggedIn(state, action) {
      state.userLoggedIn = action.payload;
    },
    setHomePageMode(state, action) {
      state.homePageMode = action.payload;
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
  },
});

export const currentUserActions = currentUserSlice.actions;
export default currentUserSlice.reducer;
