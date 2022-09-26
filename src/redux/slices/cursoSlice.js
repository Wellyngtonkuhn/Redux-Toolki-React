import { createSlice } from "@reduxjs/toolkit";

export const cursoSlice = createSlice({
  name: "curso",
  initialState: {
    activeModule: {},
    activeLesson: {},
    modules: [
      {
        id: 1,
        title: "ReactJS",
        lessons: [
          {
            id: 1,
            title: "Começando com React.js",
            link: 'pDbcC-xSat4',
          },
          {
            id: 2,
            title: "Primeiro Projeto",
            link: 'oy4cbqE1_qc',
          },
        ],
      },
      {
        id: 2,
        title: "Redux",
        lessons: [
          {
            id: 3,
            title: "Iniciando com Redux",
            link: 'g-LRqtu9INg',
          },
          {
            id: 4,
            title: "TypeScript com Redux e Redux Saga ",
            link: 'OXxul6AvXNs',
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
