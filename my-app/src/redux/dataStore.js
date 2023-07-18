import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "dataStore/fetchData",
  async function (_, { rejectWithValue }) {
    localStorage.setItem("token", "bd4a042b-67ac-4865-8b3a-51b18ce960bc");
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`https://api.coincap.io/v2/assets`, {
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
};

export const dataStoreSlice = createSlice({
  name: "dataStore",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = "resolved";

      state.data = [
        ...action.payload.data.map((item) =>
          item
            ? {
                ...item,
                changePercent24Hr: `${Number(item.changePercent24Hr).toFixed(
                  1
                )}  $`,
                marketCapUsd: `${Number(item.marketCapUsd / 1000000000).toFixed(
                  2
                )} млрд $`,
                priceUsd: `${Number(item.priceUsd).toFixed(2)}  $`,
                vwap24Hr: `${Number(item.vwap24Hr).toFixed(2)} $`,
              }
            : item
        ),
      ];
    },
    [fetchData.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});
// export const {} = dataStoreSlice.actions;

export default dataStoreSlice.reducer;
