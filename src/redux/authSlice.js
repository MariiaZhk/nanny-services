import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: "",
  },
  reducers: {
    registration: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    login: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = "";
    },
    current: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { registration, login, logout, current } = authSlice.actions;
