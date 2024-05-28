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
import { authReducer } from "./authSlice";
import { nanniesReducer } from "./nanniesSlice";
import { globalReducer } from "./GlobalSlice";

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token", "user"],
};

const modalsPersistConfig = {
  key: "modals",
  storage,
  whitelist: [],
};

const nanniesPersistConfig = {
  key: "nannies",
  storage,
  whitelist: ["favorites"],
};
const globalPersistConfig = {
  key: "global",
  storage,
  whitelist: [],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const persistedModalsReducer = persistReducer(
  modalsPersistConfig,
  modalsReducer
);
const persistedNanniesReducer = persistReducer(
  nanniesPersistConfig,
  nanniesReducer
);
const persistedGlobalReducer = persistReducer(
  globalPersistConfig,
  globalReducer
);

export const store = configureStore({
  reducer: {
    authSlice: persistedAuthReducer,
    modalsSlice: persistedModalsReducer,
    nanniesSlice: persistedNanniesReducer,
    globalSlice: persistedGlobalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
