import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authSlice";
import userReducer from "./userSlice";

// combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
});

// persist config
const persistConfig = {
  key: "root",
  storage,
};

// wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // prevents errors with non-serializable values in persist
    }),
});

// create persistor
export const persistor = persistStore(store);
