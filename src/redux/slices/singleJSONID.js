import { createSlice } from "@reduxjs/toolkit";

const singleJSONID = createSlice({
  name: "id",
  initialState: {
    id: null,
    show: false,
  },
  reducers: {
    changeID(state, action) {
      return {
        ...state,
        id: action.payload,
      };
    },
    showModal(state, action){
      return {
        ...state,
        show: action.payload
      }
    },
  },
});

export const { changeID, showModal } = singleJSONID.actions;

export default singleJSONID.reducer;
