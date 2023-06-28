import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const pastEventSlice = createSlice({
  name: "pastEvent",
  initialState,
  reducers: {
    setPastEvent: (state, { payload }) => {
      console.log("it reached here:", payload)
      return payload;
    },
  },
});

export const {
  setPastEvent,
  // clearEventOrganizerProfile
} = pastEventSlice.actions;

export default pastEventSlice.reducer;
