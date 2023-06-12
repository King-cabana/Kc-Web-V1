import { createSlice } from "@reduxjs/toolkit";
import { checkBox } from "../../userFlows/defineAudience/CheckBoxData";

const initialState = {
  budget: {
    budgetDetails: [{}, {}],
  },
  demographyDto: {
    ageRange: [],
    income: [],
    genderList: [],
    genderListNew: [],
    religionList: [],
    religionListNew: [],
    educationLevelList: [],
    educationLevelListNew: [],
    employmentStatusList: [],
    employmentStatusListNew: [],
    skillLevelList: [],
    skillLevelListNew: [],
  },
  takeInventory: {
    exclusiveContent: [],
    signage: [],
    databaseMarketing: [],
    otherPromotionalOpportunities: [],
    mediaProfile: [],
    research: [],
    contra: [],
    production: [],
    causeTieIn: [],
  },
  potentialImpacts: [],
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
    addPotentialImpact: (state, { payload }) => {
      if (state.potentialImpacts.length < 5) {
        state.potentialImpacts.push(payload);
      }
    },
    removePITag: (state, action) => {
      const index = state.potentialImpacts.findIndex(
        (tag) => tag === action.payload
      );
      if (index !== -1) {
        state.potentialImpacts.splice(index, 1);
      }
    },
    editInventoryCheckbox: (state, { payload }) => {
      const { category, item } = payload;
      Object.assign(state?.takeInventory, { [category]: item });
      //   console.log(payload);
    },
    editAudienceCheckbox: (state, { payload }) => {
      const { category, item } = payload;
      Object.assign(state?.demographyDto, { [category]: item });
      //   console.log(payload);
    },
    addToList: (state, action) => {
      const { listType, newItem } = action.payload;
      const newList = newItem
        .trim()
        .split(",")
        .map((item) => item.trim());

      let finalArray;
      if (Array.isArray(state.demographyDto[listType])) {
        finalArray = [
          ...[...state.demographyDto[listType]].filter((x) =>
            checkBox[listType].includes(x)
          ),
          ...newList,
        ];
      } else {
        finalArray = newList;
      }

      state.demographyDto[listType] = finalArray.filter((x) => x !== "");
      state.demographyDto[`${listType}New`] = newList.filter((x) => x !== "");
    },

    clearAllFields: (state) => {
      return clearObject(initialState);
    },
  },
});

export const {
  addFields,
  editInventoryCheckbox,
  editAudienceCheckbox,
  addToList,
  addPotentialImpact,
  removePITag,
  clearAllFields,
} = proposalSlice.actions;
export default proposalSlice.reducer;
