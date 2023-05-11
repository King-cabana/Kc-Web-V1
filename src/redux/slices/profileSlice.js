import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    editProfile: (state, { payload }) => {
      Object.assign(state, { [payload.name]: payload.value });
    },
    clearProfile: (state) => {
      Object.keys(state).forEach((each) =>
        Object.assign(state, { [each]: "" })
      );
    },
  },
});

export const { editProfile, clearProfile } = profileSlice.actions;

export default profileSlice.reducer;

