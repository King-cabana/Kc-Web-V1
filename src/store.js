import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import profileSlice from "./redux/slices/profileSlice";
import createEventSlice from "./redux/slices/createEventSlice";
import eventCreatedSlice from "./redux/slices/eventCreatedSlice";
import eventOrganizerProfileSlice from "./redux/slices/eventOrganizerProfileSlice";
import messageSlice from "./redux/slices/userDetailsSlice";
import otpSlice from "./redux/slices/otpSlice";
import userDetailsSlice from "./redux/slices/userDetailsSlice";
import userProfileSlice from "./redux/slices/userProfileSlice";
import proposalSlice from "./redux/slices/proposalSlice";
import proposalPreviewSlice from "./redux/slices/proposalPreviewSlice";
import pastEventSlice from "./redux/slices/pastEventSlice";
import eventsHistorySlice from "./redux/slices/eventsHistorySlice";

const persistConfig = {
  key: "kingCabana",
  storage,
};

const reducer = combineReducers({
  message: messageSlice,
  profile: profileSlice,
  eventOrganizerProfile: eventOrganizerProfileSlice,
  otp: otpSlice,
  createEvent: createEventSlice,
  eventCreated: eventCreatedSlice,
  userDetails: userDetailsSlice,
  userProfile: userProfileSlice,
  proposal: proposalSlice,
  proposalPreview: proposalPreviewSlice,
  pastEvent: pastEventSlice,
  eventsHistory: eventsHistorySlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
