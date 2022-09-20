import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "login",
  initialState: {
    name: "",
    isLogged: false,
  },
  reducers: {
    login(state, action) {
      return {
        ...state,
        name: action.payload,
        isLogged: true,
      };
    },
    logout(state) {
      return {
        ...state,
        isLogged: false,
        name: "",
      };
    },
  },
});

export const { login, logout } = LoginSlice.actions;

export default LoginSlice.reducer;
