import { configureStore } from "@reduxjs/toolkit";

import LoginSlice from "../slices/loginSlice";
import counterSlice from "../slices/counterSlice";
import cursoSlice from "../slices/cursoSlice";

export default configureStore({
  reducer: {
    login: LoginSlice,
    counter: counterSlice,
    curso: cursoSlice,
  },
});
