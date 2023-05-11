import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const eventCreatedSlice = createSlice({
  name: "eventCreated",
  initialState,
  reducers: {
    setEventCreated: (state, { payload }) => {
      Object.assign(state, { ...payload });
      // Object.assign(state, { [payload.name]: payload.value });
    },
    // clearEventOrganizerProfile: (state) => {
    //   Object.keys(state).forEach((each) =>
    //     Object.assign(state, { [each]: "" })
    //   );
    // },
  },
});

export const {
  setEventCreated,
  // clearEventOrganizerProfile
} = eventCreatedSlice.actions;

export default eventCreatedSlice.reducer;
