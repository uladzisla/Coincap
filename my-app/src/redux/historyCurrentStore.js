import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHistory = createAsyncThunk(
  "dataStore/fetchHistory",
  async function (id, { rejectWithValue }) {
    localStorage.setItem("token", "bd4a042b-67ac-4865-8b3a-51b18ce960bc");
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `https://api.coincap.io/v2/assets/${id}/history?interval=d1`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept-Encoding": "gzip",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("sadasd");
      }

      const data = response.json();
      // console.log(data);
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

export const historyCoin = createSlice({
  name: "historyStore",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchHistory.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchHistory.fulfilled]: (state, action) => {
      state.status = "resolved";

      state.data = action.payload.data;
    },
    [fetchHistory.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});
// export const {} = currentCoin.actions;

export default historyCoin.reducer;
