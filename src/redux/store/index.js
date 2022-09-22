import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import LoginSlice from "../slices/loginSlice";
import counterSlice from "../slices/counterSlice";
import cursoSlice from "../slices/cursoSlice";
import asyncRestApi from "../slices/asyncRestApi";
import singleJSONID from '../slices/singleJSONID'


export default configureStore({
  reducer: {
    login: LoginSlice,
    counter: counterSlice,
    curso: cursoSlice,
    api: asyncRestApi,
    id: singleJSONID,
  },
}, applyMiddleware(thunk));
