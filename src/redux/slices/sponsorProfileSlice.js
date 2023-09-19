import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const sponsorProfileSlice = createSlice({
  name: "sponsorProfile",
  initialState,
  reducers: {
    setSponsorProfile: (state, { payload }) => {
      Object.assign(state, { payload });
    },
    clearSponsorProfile: (state) => {
      Object.keys(state).forEach((each) =>
        Object.assign(state, { [each]: "" })
      );
    },
  },
});

export const { setSponsorProfile, clearSponsorProfile } = sponsorProfileSlice.actions;

export default sponsorProfileSlice.reducer;

