import { createSlice } from "@reduxjs/toolkit";

export const TriggerSlice = createSlice({
  name: "triggers",
  initialState: {
    toast: false,
    toastMessage: null,
  },
  reducers: {
    setToast(state, action) {
      state.toast = action.payload;
    },
    setToastMessage(state, action) {
      state.toastMessage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToast,setToastMessage } = TriggerSlice.actions;

export default TriggerSlice.reducer;