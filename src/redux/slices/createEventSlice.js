import { createSlice } from "@reduxjs/toolkit";
// import { checkBox } from "../../event/pages/checkBoxData";

const initialState = {
  tags: [],
  //   genderList: [],
  //   genderListNew: [],
  //   religionList: [],
  //   religionListNew: [],
  //   educationLevelList: [],
  //   educationLevelListNew: [],
  //   maritalStatusList: [],
  //   maritalStatusListNew: [],
  //   employmentStatusList: [],
  //   employmentStatusListNew: [],
  //   exclusiveContent: [],
  //   otherOnline: [],
  //   signage: [],
  //   databaseMarketing: [],
  //   otherPromotionalOpportunities: [],
  //   mediaProfile: [],
  //   research: [],
  //   contra: [],
  //   production: [],
  //   causeTieIn: [],
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

export const createEventSlice = createSlice({
  name: "createEvent",
  initialState,
  reducers: {
    editGenerally: (state, { payload }) => {
      Object.assign(state, { [payload.name]: payload.value });
    },
    editCheckbox: (state, { payload }) => {
      const { category, item } = payload;
      Object.assign(state, { [category]: item });
      //   console.log(payload);
    },
    // addToList: (state, action) => {
    //   const { listType, newItem } = action.payload;
    //   const newList = newItem
    //     .trim()
    //     .split(",")
    //     .map((item) => item.trim());
    //   const finalArray = [
    //     ...[...state[listType]].filter((x) => checkBox[listType].includes(x)),
    //     ...newList,
    //   ];
    //   // console.log(finalArray, newList);
    //   state[listType] = finalArray.filter((x) => x !== "");
    //   state[`${listType}New`] = newList.filter((x) => x !== "");
    // },
    addTag: (state, action) => {
      if (state.tags.length < 5) {
        state.tags.push(action.payload);
      }
    },
    removeTag: (state, action) => {
      const index = state.tags.findIndex((tag) => tag === action.payload);
      if (index !== -1) {
        state.tags.splice(index, 1);
      }
    },
    clearEvent: (state) => {
      return clearObject(initialState);
    },
  },
});

export const {
  editGenerally,
  clearEvent,
  editCheckbox,
  addToList,
  addTag,
  removeTag,
} = createEventSlice.actions;

export default createEventSlice.reducer;
