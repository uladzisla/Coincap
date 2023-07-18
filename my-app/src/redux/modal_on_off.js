import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

export const stateModal = createSlice({
  name: "stateModal",
  initialState,
  reducers: {
    toggleStatus: (state, action) => {
      state.status = !action.payload;
    },
  },
});
export const { toggleStatus } = stateModal.actions;

export default stateModal.reducer;
