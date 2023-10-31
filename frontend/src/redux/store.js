import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";
import authReducer from "./features/auth/authSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    // Combine reducers for different parts of the state
    // This key represents the part of the state managed by the apiSlice
    [apiSlice.reducerPath]: apiSlice.reducer,

    // The "auth" key represents the part of the state managed by the authReducer
    auth: authReducer,
  },

  // Middleware configuration
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  // Enable Redux DevTools for debugging during development
  devTools: true,
});

// Set up listeners for Redux Toolkit's query slices
setupListeners(store.dispatch);

export default store;
