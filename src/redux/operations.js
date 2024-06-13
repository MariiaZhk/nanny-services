import {
  getDatabase,
  query,
  ref,
  // limitToFirst,
  get,
  orderByKey,
} from "firebase/database";
import app from "../firebaseConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const LIMIT = 3;

export const fetchNanniesThunk = createAsyncThunk(
  "nannies/fetchAll",
  async (_, thunkAPI) => {
    try {
      const db = getDatabase(app);
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

// export const fetchNanniesPerPageThunk = createAsyncThunk(
//   "nannies/fetchPerPage",
//   async (page, thunkAPI) => {
//     try {
//       const db = getDatabase(app);

//       const nanniesRef = ref(db, "nannies");
//       const nanniesQuery = query(
//         nanniesRef,
//         orderByKey(),

//         limitToFirst(LIMIT * page)
//       );
//       const snapshot = await get(nanniesQuery);
//       const nanniesData = snapshot.val();
//       return nanniesData ? Object.values(nanniesData) : [];
//     } catch (error) {
//       console.log(error.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
