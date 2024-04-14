import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { register, login, logout, refreshUser } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        toast.success('Registration was successful!');
        toast.success('You are logged in!');
      })
      .addCase(register.rejected, (state, action) => {
        toast.error(
          'This user is already registered. Please try another Username and Email.' +
            action.payload
        );
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success('You are successfully logged in!');
      })
      .addCase(login.rejected, (state, action) => {
        toast.error('Something went wrong. Please try again.' + action.payload);
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        toast.success('You are successfully logged out!');
      })
      .addCase(logout.rejected, (state, action) => {
        toast.error('Something went wrong. Please try again.' + action.payload);
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export default authSlice.reducer;
