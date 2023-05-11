import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    setOtp: (state, action) => {
      state = action.payload
      // return { otp: action.payload };
    },
    clearOtp: (state, action) => {
      state = {}
      // return { otp: "" };
    },
  },
});

const { reducer, actions } = otpSlice;

export const { setOtp, clearOtp } = actions
export default reducer;