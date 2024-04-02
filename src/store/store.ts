import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import authSlice from "./features/authSlice";

export const store = configureStore({
  reducer: {
    userData: userSlice,
    auth: authSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
