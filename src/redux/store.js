import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./features/habitSlice";

//Store for the redux
const store = configureStore({
  reducer: {
    habits: habitReducer,
  },
});
export default store;
