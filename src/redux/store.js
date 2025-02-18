import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // ✅ Use local storage
import { persistReducer, persistStore } from "redux-persist";
import adminReducer from "../feautures/adminSlice";

// ✅ Create Persist Config
const persistConfig = {
  key: "admin",
  storage,
};

// ✅ Wrap Reducer with persistReducer
const persistedAdminReducer = persistReducer(persistConfig, adminReducer);

export const store = configureStore({
  reducer: {
    admin: persistedAdminReducer, // ✅ Persisted reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ✅ Fix non-serializable values warning
    }),
});

// ✅ Export Persistor
export const persistor = persistStore(store);
