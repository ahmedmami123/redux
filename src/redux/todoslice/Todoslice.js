import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolist: [
    {
      id: Math.random(),
      title: "todo item 1",
      description: "description todo item 1",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "todo item 2",
      description: "description todo item 2",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "todo item 3",
      description: "description todo item 3",
      isDone: true,
    },
    {
        id: Math.random(),
        title: "todo item 4",
        description: "description todo item 4",
        isDone: true,
      },
      {
        id: Math.random(),
        title: "todo item ",
        description: "description todo item 5",
        isDone: true,
      },
  ],
};

export const Todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    AddTask: (state, action) => {
      state.todolist.push(action.payload);
    },
    RemoveTask: (state, action) => {
      state.todolist = state.todolist.filter(
        (el) => el.id !== action.payload.id
      );
    },
    DoneTask: (state, action) => {
      let i = state.todolist.findIndex((el) => el.id === action.payload.id);
      state.todolist[i] = {
        ...state.todolist[i],
        isDone: !state.todolist[i].isDone,
      };
    },
    EditTask1: (state, action) => {
      let i = state.todolist.findIndex((el) => el.id === action.payload.id);
      state.todolist[i] = {
        ...state.todolist[i],
        title: action.payload.edited.title,
        description: action.payload.edited.description,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddTask, RemoveTask, DoneTask, EditTask1 } = Todoslice.actions;

export default Todoslice.reducer;
