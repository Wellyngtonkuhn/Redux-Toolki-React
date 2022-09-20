import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import LoginSlice from "../slices/loginSlice";
import counterSlice from "../slices/counterSlice";
import cursoSlice from "../slices/cursoSlice";
import asyncRestApi from "../slices/asyncRestApi";

export default configureStore({
  reducer: {
    login: LoginSlice,
    counter: counterSlice,
    curso: cursoSlice,
    api: asyncRestApi,
  },
}, applyMiddleware(thunk));
