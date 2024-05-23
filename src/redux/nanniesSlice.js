import { createSlice } from "@reduxjs/toolkit";
import { fetchNanniesPerPageThunk, fetchNanniesThunk } from "./operations";

const initialState = {
  nannies: [],
  favorites: [],
  loadMore: true,
  isLoading: false,
  error: null,
  filter: null,
  filteredNannies: [],
};

const onPending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
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
    builder
      .addCase(fetchNanniesThunk.pending, onPending)
      .addCase(fetchNanniesThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.nannies = payload;
        state.error = null;
      })
      .addCase(fetchNanniesThunk.rejected, onRejected)

      .addCase(fetchNanniesPerPageThunk.pending, onPending)
      .addCase(fetchNanniesPerPageThunk.fulfilled, (state, { payload }) => {
        if (payload.length < 3) {
          state.loadMore = false;
        }

        const uniquePayload = payload.filter(
          ({ id }) =>
            !state.nannies.some((existingNanny) => existingNanny.id === id)
        );

        state.nannies = [...state.nannies, ...uniquePayload];
        state.isLoading = false;
      })

      .addCase(fetchNanniesPerPageThunk.rejected, onRejected);
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
