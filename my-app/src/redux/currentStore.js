import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrent = createAsyncThunk(
  "dataStore/fetchCurrent",
  async function (id, { rejectWithValue }) {
    localStorage.setItem("token", "bd4a042b-67ac-4865-8b3a-51b18ce960bc");
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`https://api.coincap.io/v2/assets/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept-Encoding": "gzip",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("sadasd");
      }

      const data = response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  data: [],
  status: null,
  error: null,
  newData: [],
};

export const currentCoin = createSlice({
  name: "currentCoin",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrent.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCurrent.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.data = { ...action.payload.data };
    },
    [fetchCurrent.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});
// export const {} = currentCoin.actions;

export default currentCoin.reducer;
