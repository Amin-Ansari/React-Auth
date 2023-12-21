import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "authSlice",
  initialState: { isUserAuthorized: false, userIdToken: null },
  reducers: {
    authorizeTheUser: (state) => {
      state.isUserAuthorized = true;
    },
    unAuthorizeTheUser: (state) => {
      state.isUserAuthorized = false;
    },
    setTheIdToken: (state, action) => {
      state.userIdToken = action.payload;
    }
  }
});

export const authActions = AuthSlice.actions;

const authReducer = AuthSlice.reducer;

export default authReducer;
