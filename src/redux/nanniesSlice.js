import { createSlice } from "@reduxjs/toolkit";
import { fetchNanniesThunk } from "./operations";

const initialState = {
  nannies: [],
  favorites: [],
  loadMore: true,
  filter: null,
  filteredNannies: [],
};

const nanniesSlice = createSlice({
  name: "nannies",
  initialState,

  reducers: {
    setLoadMore: (state, { payload }) => {
      state.loadMore = payload;
    },
    setFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
    setFilteredNannies: (state, { payload }) => {
      state.filteredNannies = payload;
    },
    setFilterDelete: (state) => {
      state.filter = null;
    },
    setFavoriteNanny: (state, { payload }) => {
      state.favorites.push(payload);
    },
    deleteFavoriteNanny: (state, { payload }) => {
      state.favorites = state.favorites.filter((nanny) => nanny.id !== payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchNanniesThunk.fulfilled, (state, { payload }) => {
      state.nannies = payload;
    });

    // .addCase(fetchNanniesPerPageThunk.fulfilled, (state, { payload }) => {
    //   if (payload.length < 3) {
    //     state.loadMore = false;
    //   }

    //   const uniquePayload = payload.filter(
    //     ({ id }) =>
    //       !state.nannies.some((existingNanny) => existingNanny.id === id)
    //   );

    //   state.nannies = [...state.nannies, ...uniquePayload];
    //   // state.isLoading = false;
    // });
  },
});

export const {
  setFavoriteNanny,
  deleteFavoriteNanny,
  setFilterAction,
  setFilteredNannies,
  setFilterDelete,
} = nanniesSlice.actions;

export const nanniesReducer = nanniesSlice.reducer;
