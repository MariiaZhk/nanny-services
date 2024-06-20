import {
  getDatabase,
  query,
  ref,
  set,
  get,
  orderByKey,
} from "firebase/database";
import app from "../firebaseConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const LIMIT = 3;

const db = getDatabase(app);

export const fetchNanniesThunk = createAsyncThunk(
  "nannies/fetchAll",
  async (_, thunkAPI) => {
    try {
      const nanniesRef = ref(db, "nannies");
      const nanniesQuery = query(nanniesRef, orderByKey());
      const snapshot = await get(nanniesQuery);
      const nanniesData = snapshot.val();
      return nanniesData ? Object.values(nanniesData) : [];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setUserFavoritesThunk = createAsyncThunk(
  "auth/setUserFavorites",
  async ({ userId, favorites }, thunkAPI) => {
    try {
      await set(ref(db, `users/${userId}/favorites`), favorites);
      return favorites;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchUserFavoritesThunk = createAsyncThunk(
//   "auth/getUserFavorites",
//   async (userId, thunkAPI) => {
//     try {
//       const favoritesRef = ref(db, `users/${userId}/favorites`);
//       const snapshot = await get(favoritesRef);
//       if (snapshot.exists()) {
//         const favoritesData = snapshot.val();
//         const favoritesArray = Object.keys(favoritesData).map(
//           (key) => favoritesData[key]
//         );
//         return favoritesArray;
//       } else {
//         return [];
//       }
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
export const fetchUserFavoritesThunk = createAsyncThunk(
  "auth/fetchUserFavorites",
  async (userId, thunkAPI) => {
    try {
      const favoritesRef = ref(db, `users/${userId}/favorites`);
      const snapshot = await get(favoritesRef);
      const favoritesData = snapshot.val();
      return favoritesData ? Object.values(favoritesData) : [];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const removeFavoriteByIdThunk = createAsyncThunk(
//   "auth/removeFavoriteById",
//   async ({ userId, favoriteId }, thunkAPI) => {
//     try {
//       const favoritesRef = ref(db, `users/${userId}/favorites`);
//       const snapshot = await get(favoritesRef);
//       if (snapshot.exists()) {
//         const favoritesData = snapshot.val();
//         const favoritesArray = Object.keys(favoritesData).map((key) => ({
//           id: key,
//           ...favoritesData[key],
//         }));

//         const indexToRemove = favoritesArray.findIndex(
//           (favorite) => favorite.id === favoriteId
//         );

//         if (indexToRemove !== -1) {
//           favoritesArray.splice(indexToRemove, 1);
//           await set(ref(db, `users/${userId}/favorites`), favoritesArray);
//           return favoriteId;
//         } else {
//           throw new Error(
//             "Object with provided favoriteId not found in favorites array"
//           );
//         }
//       } else {
//         throw new Error("No favorites found for the provided userId");
//       }
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
export const removeFavoriteByIdThunk = createAsyncThunk(
  "auth/removeFavoriteById",
  async ({ userId, favoriteId }, thunkAPI) => {
    try {
      const favoritesRef = ref(db, `users/${userId}/favorites`);
      const snapshot = await get(favoritesRef);
      if (snapshot.exists()) {
        const favoritesData = snapshot.val();
        const updatedFavorites = Object.values(favoritesData).filter(
          (favorite) => favorite.id !== favoriteId
        );
        await set(ref(db, `users/${userId}/favorites`), updatedFavorites);
        return favoriteId;
      } else {
        throw new Error("No favorites found for the provided userId");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
