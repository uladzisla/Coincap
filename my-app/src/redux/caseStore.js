import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  stateModal: false,
  price: undefined,
  count: 0,
  quontity: null,
  objectCount: [],
  finalObjectCase: [],
};

export const caseStore = createSlice({
  name: "caseStore",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.stateModal = !action.payload;
    },
    addPrice: (state, action) => {
      state.price = action.payload;
      console.log(state.price);
    },
    totalPrice: (state, action) => {
      state.count = state.count + action.payload;
      // console.log(state.count);
    },
    itemCase: (state, action) => {
      state.objectCount.push(JSON.parse(JSON.stringify(action.payload)));
      // console.log();
    },
    finalCase: (state, action) => {
      console.log(action.payload);

      state.finalObjectCase.push(JSON.parse(JSON.stringify(action.payload)));
      // state.finalObjectCase.filter((item) => item.id === action.payload.id);
    },
    addQty: (state, action) => {
      // state.quontity.push(JSON.parse(JSON.stringify(action.payload)));
      // console.log(JSON.parse(JSON.stringify(state.quontity)));
      state.quontity = action.payload;
    },
  },
});
export const {
  toggleModal,
  addPrice,
  totalPrice,
  itemCase,
  addQty,
  finalCase,
} = caseStore.actions;

export default caseStore.reducer;
