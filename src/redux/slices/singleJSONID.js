import { createSlice } from "@reduxjs/toolkit";

const singleJSONID = createSlice({
  name: "id",
  initialState: {
    id: 0,
  },
  reducers: {
    changeID(state, action) {
      return {
        ...state,
        id: action.payload,
      };
    },
  },
});

export const { changeID } = singleJSONID.actions;

export default singleJSONID.reducer;
