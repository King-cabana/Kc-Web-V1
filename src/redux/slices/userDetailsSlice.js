import { createSlice } from "@reduxjs/toolkit";

const initialState = { isSignedIn: false, details: {} };

export const fetchUserDetails = (email, token) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://kc-backend-systest.onrender.com/eventuser/email?email=${email}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setUserDetails(data));
    // console.log(data);
  } catch (error) {
    console.error("Failed to fetch user details: ", error);
    // throw error;
  }
};

const userDetailsSlice = createSlice({
  name: "userdetails",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.isSignedIn = true;
      state.details = action.payload;
    },
    setUserToken: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
    clearUserDetails: (state, action) => {
      state.isSignedIn = false;
      state.details = {};
    },
  },
});

export const { setUserDetails, clearUserDetails, setUserToken } =
  userDetailsSlice.actions;
export default userDetailsSlice.reducer;
