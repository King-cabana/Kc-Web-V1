import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const eventsHistorySlice = createSlice({
  name: "eventsHistory",
  initialState,
  reducers: {
    setEventsHistory: (state, { payload }) => {
      return payload;
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
  setEventsHistory,
  // clearEventOrganizerProfile
} = eventsHistorySlice.actions;

export default eventsHistorySlice.reducer;
