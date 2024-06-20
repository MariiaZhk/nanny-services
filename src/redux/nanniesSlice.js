import { createSlice } from "@reduxjs/toolkit";
import { fetchNanniesThunk } from "./operations";

const initialState = {
  nannies: [],
  filter: null,
  filteredNannies: [],
};

const nanniesSlice = createSlice({
  name: "nannies",
  initialState,

  reducers: {
    setFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
    setFilteredNannies: (state, { payload }) => {
      state.filteredNannies = payload;
    },
    setFilterDelete: (state) => {
      state.filter = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchNanniesThunk.fulfilled, (state, { payload }) => {
      state.nannies = payload;
    });
  },
});

export const { setFilterAction, setFilteredNannies, setFilterDelete } =
  nanniesSlice.actions;

export const nanniesReducer = nanniesSlice.reducer;
