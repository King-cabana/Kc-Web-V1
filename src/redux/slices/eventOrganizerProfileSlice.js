import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const eventOrganizerProfileSlice = createSlice({
  name: "eventOrganizerProfile",
  initialState,
  reducers: {
    setEventOrganizerProfile: (state, { payload }) => {
      Object.assign(state, { ...payload });
      // Object.assign(state, { [payload.name]: payload.value });
    },
    clearEventOrganizerProfile: (state) => {
      Object.keys(state).forEach((each) =>
        Object.assign(state, { [each]: "" })
      );
    },
  },
});

export const { setEventOrganizerProfile, clearEventOrganizerProfile } =
  eventOrganizerProfileSlice.actions;

export default eventOrganizerProfileSlice.reducer;
