import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = action.payload.isAuth;
    },
    logout: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
