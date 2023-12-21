import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "authSlice",
  initialState: { isUserAuthorized: false },
  reducers: {
    authorizeTheUser: (state) => {
      state.isUserAuthorized = true;
    },
    unAuthorizeTheUser: (state) => {
      state.isUserAuthorized = false;
      localStorage.clear();
    }
  }
});

export const authActions = AuthSlice.actions;

const authReducer = AuthSlice.reducer;

export default authReducer;
