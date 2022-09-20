import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0,
  },
  reducers: {
    somar(state, action) {
      return {
        ...state,
        number: state.number + 1,
      };
    },
    diminuir(state, action) {
      return {
        ...state,
        number: state.number - 1,
      };
    },
    resetar(state, action) {
      return {
        ...state,
        number: 0,
      };
    },
  },
});

export const { somar, diminuir, resetar } = CounterSlice.actions;

export default CounterSlice.reducer;
