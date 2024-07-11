import { createSlice } from "@reduxjs/toolkit";
import { fetchNanniesThunk } from "./operations";

const initialState = {
  nannies: [],
  filter: {
    nannies: "all",
    favorites: "all",
  },
  filteredNannies: [],
  filteredFavorites: [],
};

const nanniesSlice = createSlice({
  name: "nannies",
  initialState,

  reducers: {
    setFilterAction: (state, { payload }) => {
      state.filter[payload.type] = payload.value;
    },
    setFilteredItems: (state, { payload }) => {
      state[
        payload.type === "nannies" ? "filteredNannies" : "filteredFavorites"
      ] = payload.items;
    },
    setFilterDelete: (state) => {
      state.filter = initialState.filter;
      state.filteredNannies = [];
      state.filteredFavorites = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchNanniesThunk.fulfilled, (state, { payload }) => {
      state.nannies = payload;
    });
  },
});

export const { setFilterAction, setFilteredItems, setFilterDelete } =
  nanniesSlice.actions;

export const nanniesReducer = nanniesSlice.reducer;
