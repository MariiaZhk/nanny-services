import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { modalsReducer } from "./modalsSlice";
// import { globalReducer } from "./Global/globalSlice.jsx";

// const authPersistConfig = {
//   key: "auth",
//   version: 1,
//   storage,
//   whitelist: ["token", "user", "var", "language"],
// };

const modalsPersistConfig = {
  key: "modals",
  storage,
  whitelist: [],
};
// const globalPersistConfig = {
//   key: "global",
//   storage,
//   whitelist: [],
// };

// const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
// const persistedCounterReducer = persistReducer(
//   counterPersistConfig,
//   counterReducer
// );

const persistedModalsReducer = persistReducer(
  modalsPersistConfig,
  modalsReducer
);
// const persistedGlobalReducer = persistReducer(
//   globalPersistConfig,
//   globalReducer
// );

export const store = configureStore({
  reducer: {
    // authSlice: persistedAuthReducer,
    modalsSlice: persistedModalsReducer,
    // globalSlice: persistedGlobalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
