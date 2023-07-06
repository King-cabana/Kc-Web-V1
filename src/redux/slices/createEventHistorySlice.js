import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sponsorList : [],
  sponsorsBenefits : [],
  imageUrls : [],
};

const clearObject = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      newObj[key] = [];
    } else if (typeof obj[key] === "string") {
      newObj[key] = "";
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

export const createEventHistorySlice = createSlice({
  name: "createEventsHistory",
  initialState,
  reducers: {
    addEventHistoryFields: (state, { payload }) => {
      Object.assign(state, { [payload.name]: payload.value });
    },
    addSponsors: (state, { payload }) => {
      if (state.sponsorList.length < 5) {
        state.sponsorList.push(payload);
      }
    },
    removeSponsors: (state, { payload }) => {
      state.sponsorList = state.sponsorList.filter(
        (sponsor) => sponsor !== payload
      );
    },
    
    addImageUrl: (state, action) => {
        const imageUrl = action.payload;
        const existingIndex = state.imageUrls.findIndex(url => url === imageUrl);
      
        if (existingIndex !== -1) {
          // URL already exists, update it
          state.imageUrls[existingIndex] = imageUrl;
        } else if (state.imageUrls.length < 3) {
          // URL doesn't exist and array size is less than 3, add the URL
          state.imageUrls.push(imageUrl);
        }
      },
      

    clearEventHistory: (state) => {
      return clearObject(initialState);
    },
  },
});

export const {
  addEventHistoryFields,
  addSponsors,
  removeSponsors,
  addImageUrl,
  clearEventHistory,

} = createEventHistorySlice.actions;
export default createEventHistorySlice.reducer;
