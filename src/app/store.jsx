import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../features/LoginSlice";
import NewsReducer from "../features/NewsSlice";

export const store = configureStore({
  reducer: {
    login: LoginReducer,
    news: NewsReducer,
  },
});
