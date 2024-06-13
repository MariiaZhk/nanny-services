import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchNanniesThunk } from "./operations";

const initialState = {
  isLoading: false,
  error: null,
};

function handlePending(state) {
  state.isLoading = true;
}

function handleFulfilled(state) {
  state.isLoading = false;
  state.error = null;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(fetchNanniesThunk.fulfilled, fetchNanniesThunk.fulfilled),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(fetchNanniesThunk.pending, fetchNanniesThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(fetchNanniesThunk.rejected, fetchNanniesThunk.rejected),
        handleRejected
      );
  },
});

// export const {} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
