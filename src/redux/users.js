import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from "../api/userAPI";
import { sortBy, prop } from "ramda";
import queryString from "query-string";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await userAPI.fetchUsers();
    return response;
  } catch (error) {
    throw error;
  }
});

const updateURL = (state) => {
  const params = {
    viewType: state.viewType,
    sortKey: state.sortKey,
    sortOrder: state.sortOrder,
    query: state.query,
  };
  const url = `${window.location.pathname}?${queryString.stringify(params)}`;
  window.history.replaceState("", "", url);
};

const applyParamsFromURL = (state) => {
  const parsed = queryString.parse(window.location.search);
  if (parsed.viewType) {
    state.viewType = parsed.viewType;
  }

  if (parsed.sortOrder) {
    state.sortOrder = parsed.sortOrder;
  }

  if (parsed.sortKey) {
    state.sortKey = parsed.sortKey;
    state.filteredList = sortBy(prop(parsed.sortKey))(state.filteredList);
    if (parsed.sortOrder === "desc") {
      state.filteredList = state.filteredList.reverse();
    }
  }

  if (parsed.query) {
    state.query = parsed.query;
    const queryList = parsed.query.trim().split(" ");
    const filteredByName = state.fullList.filter((el) => {
      return queryList.every((queryPart) =>
        el.name.toLowerCase().includes(queryPart.toLowerCase())
      );
    });
    if (state.sortOrder === "desc") {
      state.filteredList = sortBy(prop(state.sortKey))(
        filteredByName
      ).reverse();
    } else {
      state.filteredList = sortBy(prop(state.sortKey))(filteredByName);
    }
  }
};

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    fullList: [],
    filteredList: [],
    viewType: "table",
    sortKey: "id",
    sortOrder: "asc",
    query: "",
  },
  reducers: {
    toggleFavorite: (state, { payload }) => {
      const user = state.filteredList.find((el) => el.id === payload);
      const index = state.filteredList.indexOf(user);
      state.filteredList[index].favourite =
        !state.filteredList[index].favourite;
    },
    changeSortKey: (state, { payload }) => {
      state.sortKey = payload;
      state.filteredList = sortBy(prop(payload))(state.filteredList);
      if (state.sortOrder === "desc") {
        state.filteredList = state.filteredList.reverse();
      }
      updateURL(state);
    },
    changeSortOrder: (state, { payload }) => {
      state.sortOrder = payload;
      state.filteredList = state.filteredList.reverse();
      updateURL(state);
    },
    changeViewType: (state, { payload }) => {
      state.viewType = payload;
      updateURL(state);
    },
    filterByName: (state, { payload }) => {
      state.query = payload;
      const queryList = payload.trim().split(" ");
      const filteredByName = state.fullList.filter((el) => {
        return queryList.every((queryPart) =>
          el.name.toLowerCase().includes(queryPart.toLowerCase())
        );
      });
      if (state.sortOrder === "desc") {
        state.filteredList = sortBy(prop(state.sortKey))(
          filteredByName
        ).reverse();
      } else {
        state.filteredList = sortBy(prop(state.sortKey))(filteredByName);
      }
      updateURL(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.fullList = [...action.payload];
      state.filteredList = [...action.payload];
      if (window.location.search) {
        applyParamsFromURL(state);
      }
    });
  },
});

export const {
  changeSortKey,
  changeViewType,
  changeSortOrder,
  filterByName,
  toggleFavorite,
} = usersSlice.actions;

export const selectViewType = (state) => state.users.viewType;
export const selectFilteredUsers = (state) => state.users.filteredList;
export const selectSortKey = (state) => state.users.sortKey;
export const selectSortOrder = (state) => state.users.sortOrder;

export default usersSlice.reducer;
