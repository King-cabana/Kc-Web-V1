import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
};

const clearObject = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      newObj[key] = [];
    } else if (typeof obj[key] === "string") {
      newObj[key] = "";
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

export const createEventSlice = createSlice({
  name: "createEvent",
  initialState,
  reducers: {
    editGenerally: (state, { payload }) => {
      Object.assign(state, { [payload.name]: payload.value });
    },
    addTag: (state, action) => {
      if (state.tags.length < 5) {
        state.tags.push(action.payload);
      }
    },
    removeTag: (state, action) => {
      const index = state.tags.findIndex((tag) => tag === action.payload);
      if (index !== -1) {
        state.tags.splice(index, 1);
      }
    },
    clearEvent: (state) => {
      return clearObject(initialState);
    },
  },
});

export const { editGenerally, clearEvent, addTag, removeTag } =
  createEventSlice.actions;

export default createEventSlice.reducer;
