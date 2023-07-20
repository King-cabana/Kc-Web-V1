import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const proposalCreatedSlice = createSlice({
  name: "proposalCreated",
  initialState,
  reducers: {
    setProposalCreated: (state, { payload }) => {
      Object.assign(state, { ...payload });
    },
  },
});

export const {
  setProposalCreated,
} = proposalCreatedSlice.actions;

export default proposalCreatedSlice.reducer;
