import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchNanniesThunk,
  fetchUserFavoritesThunk,
  removeFavoriteByIdThunk,
  setUserFavoritesThunk,
} from "./operations";

const initialState = {
  isLoading: false,
  error: null,
};

function handlePending(state) {
  state.isLoading = true;
  state.error = null;
}

function handleFulfilled(state) {
  state.isLoading = false;
  state.error = null;
}

function handleRejected(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          fetchNanniesThunk.fulfilled,
          fetchNanniesThunk.fulfilled,
          fetchUserFavoritesThunk.fulfilled,
          setUserFavoritesThunk.fulfilled,
          removeFavoriteByIdThunk.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          fetchNanniesThunk.pending,
          fetchNanniesThunk.pending,
          fetchUserFavoritesThunk.pending,
          setUserFavoritesThunk.pending,
          removeFavoriteByIdThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchNanniesThunk.rejected,
          fetchNanniesThunk.rejected,
          fetchUserFavoritesThunk.rejected,
          setUserFavoritesThunk.rejected,
          removeFavoriteByIdThunk.rejected
        ),
        handleRejected
      );
  },
});

export const globalReducer = globalSlice.reducer;
