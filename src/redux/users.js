import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from "../api/userAPI";
import { sortBy, prop } from "ramda";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await userAPI.fetchUsers();
    return response;
  } catch (error) {
    throw error;
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    fullList: [],
    filteredList: [],
    viewType: "table",
    sortKey: "id",
    sortOrder: "asc",
  },
  reducers: {
    changeSortKey: (state, action) => {
      state.sortKey = action.payload;
      state.filteredList = sortBy(prop(action.payload))(state.filteredList);
      if (state.sortOrder === "desc") {
        state.filteredList = state.filteredList.reverse();
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.fullList = [...action.payload];
      state.filteredList = [...action.payload];
    });
  },
});

export const { changeSortKey } = usersSlice.actions;

export const selectViewType = (state) => state.users.viewType;
export const selectFilteredUsers = (state) => state.users.filteredList;
export const selectSortKey = (state) => state.users.sortKey;

export default usersSlice.reducer;
