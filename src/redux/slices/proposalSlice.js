import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  potentialImpacts: [],
  benefitList: [],
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

const proposalSlice = createSlice({
  name: "proposal",
  initialState,
  reducers: {
    addFields: (state, { payload }) => {
      Object.assign(state, { [payload.name]: payload.value });
    },
    addPotentialImpact: (state, {payload}) => {
      if (state.potentialImpacts.length < 5) {
        state.potentialImpacts.push(payload);
      }
    },
    removePITag: (state, action) => {
      const index = state.potentialImpacts.findIndex((tag) => tag === action.payload);
      if (index !== -1) {
        state.potentialImpacts.splice(index, 1);
      }
    }, 
    addBenefitList: (state, {payload}) => {
      if (state.benefitList.length < 5) {
        state.benefitList.push(payload);
      }
    },
    removeBLTag: (state, action) => {
      const index = state.benefitList.findIndex((tag) => tag === action.payload);
      if (index !== -1) {
        state.benefitList.splice(index, 1);
      }
    },
    clearAllFields: (state) => {
      return clearObject(initialState);
    },
  },
});

export const {
  addFields,
  addBenefitList,
  addPotentialImpact,
  removeBLTag,
  removePITag,
  clearAllFields,
} = proposalSlice.actions;
export default proposalSlice.reducer;
