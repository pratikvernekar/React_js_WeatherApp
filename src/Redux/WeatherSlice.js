import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    searchData: [],
  },
  reducers: {
    addSearchData: (state, action) => {
      console.log("!!", action.payload);
      state.searchData.push(action.payload);
    },
    deleteSearchData: (state, action) => {
      state.searchData = [];
    },
  },
});

export const { addSearchData, deleteSearchData } = weatherSlice.actions;
export default weatherSlice.reducer;
