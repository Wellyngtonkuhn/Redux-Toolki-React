import { createSlice } from "@reduxjs/toolkit";

export const cursoSlice = createSlice({
  name: "curso",
  initialState: {
    activeModule: {},
    activeLesson: {},
    modules: [
      {
        id: 1,
        title: "Iniciando com React",
        lessons: [
          {
            id: 1,
            title: "Primeira Aula",
          },
          {
            id: 2,
            title: "Segunda Aula",
          },
        ],
      },
      {
        id: 2,
        title: "Iniciando com Redux",
        lessons: [
          {
            id: 3,
            title: "Terceira Aula",
          },
          {
            id: 4,
            title: "Quarta Aula",
          },
        ],
      },
    ],
  },
  reducers: {
    toggleLesson(state, {payload}) {
      return {
        ...state,
        activeModule: payload.module,
        activeLesson: payload.lesson,
      };
    },
  },
});

export const { toggleLesson } = cursoSlice.actions;

export default cursoSlice.reducer;
