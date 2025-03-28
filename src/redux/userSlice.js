// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for updating a user
export const updateUserAsync = createAsyncThunk(
  'users/updateUserAsync',
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const response = await axios.put(`https://reqres.in/api/users/${id}`, updatedData);
      return { id, updatedData };
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to update user');
    }
  }
);

// Async thunk for deleting a user
export const deleteUserAsync = createAsyncThunk(
  'users/deleteUserAsync',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to delete user');
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState: {
    userList: [],
    error: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.userList = action.payload;
    },
    updateUser: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.userList.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.userList[index] = { ...state.userList[index], ...updatedData };
      }
    },
    deleteUser: (state, action) => {
      state.userList = state.userList.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        const { id, updatedData } = action.payload;
        const index = state.userList.findIndex((user) => user.id === id);
        if (index !== -1) {
          state.userList[index] = { ...state.userList[index], ...updatedData };
        }
      })
      .addCase(deleteUserAsync.fulfilled, (state, action) => {
        state.userList = state.userList.filter((user) => user.id !== action.payload);
      })
      .addCase(updateUserAsync.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteUserAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setUsers, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
