import { createSlice } from "@reduxjs/toolkit";

// const API_URL_2 = "https://kc-backend-systest.onrender.com/proposals/event/";

// export const fetchProposalPreview = (id, token) => async (dispatch) => {
//     try {
//       const response = await axios.get(`${API_URL_2}${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       dispatch(setProposalPreview(response.data));
//     } catch (error) {
//       console.log(error);
//     }
// }

const proposalPreviewSlice = createSlice({
  name: "proposalPreview",
  initialState: { preview: null },
  reducers: {
    setProposalPreview: (state, action) => {
      state.preview = action.payload;
    },
    clearProposalPreview: (state) => {
      state.preview = null;
    },
  },
});

export const { setProposalPreview } = proposalPreviewSlice.actions;
export default proposalPreviewSlice.reducer;
