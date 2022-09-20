import { createSlice } from "@reduxjs/toolkit";

const AsyncRestApi = createSlice({
  name: "api",
  initialState: {
    loading: false,
    users: [],
    error: "",
  },
  reducers: {
    fetchUsersRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    fetchUsersSucceed(state, action) {
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    },
    fetchUsersError(state, action) {
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    },
  },
});

export const { fetchUsersRequest, fetchUsersSucceed, fetchUsersError } =
  AsyncRestApi.actions;

export default AsyncRestApi.reducer;
