import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  userId: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
