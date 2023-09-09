import { createSlice } from "@reduxjs/toolkit";

const initialState = { isSignedIn: false, details: {} };

export const fetchSponsorDetails = (sponsorEmail, sponsorToken) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/eventuser/email?email=${sponsorEmail}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sponsorToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setSponsorDetails(data));
    // console.log(data);
  } catch (error) {
    console.error("Failed to fetch user details: ", error);
    // throw error;
  }
};

const sponsorDetailsSlice = createSlice({
  name: "sponsorDetails",
  initialState,
  reducers: {
    setSponsorDetails: (state, action) => {
      state.isSignedIn = true;
      state.details = action.payload;
    },
    setSponsorToken: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
    clearSponsorDetails: (state, action) => {
      state.isSignedIn = false;
      state.details = {};
    },
  },
});

export const { setSponsorDetails, clearSponsorDetails, setSponsorToken } =
  sponsorDetailsSlice.actions;
export default sponsorDetailsSlice.reducer;
