import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUserFavoritesThunk,
  removeFavoriteByIdThunk,
  setUserFavoritesThunk,
} from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    favorites: [],
  },
  reducers: {
    registration: (state, { payload }) => {
      state.user = payload.user;
    },
    login: (state, { payload }) => {
      state.user = payload.user;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserFavoritesThunk.fulfilled, (state, { payload }) => {
        state.favorites = payload;
      })

      .addCase(setUserFavoritesThunk.fulfilled, (state, { payload }) => {
        state.favorites = payload;
      })

      .addCase(removeFavoriteByIdThunk.fulfilled, (state, { payload }) => {
        state.favorites = state.favorites.filter(
          (favorite) => favorite.id !== payload
        );
      });
  },
});

export const authReducer = authSlice.reducer;
export const { registration, login, logout, current } = authSlice.actions;
