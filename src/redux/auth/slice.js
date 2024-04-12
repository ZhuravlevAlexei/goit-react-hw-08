import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  // isLoggedIn: true,
  isRefreshing: false,
};

// стане у пригоді
// const handlePending = state => {
//   state.loading = true;
//   state.error = false;
// };
// const handleRejected = (state, action) => {
//   state.loading = false;
//   state.error = action.payload;
// };

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder;
    //operations
    // register;
    // login;
    // logout;
    // refreshUser;

    //example
    //   .addCase(fetchContacts.pending, handlePending)
    //   .addCase(fetchContacts.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.items = action.payload;
    //     state.items.sort((a, b) => a.name.localeCompare(b.name));
    //   })
    //   .addCase(fetchContacts.rejected, handleRejected);
  },
});

export default authSlice.reducer;
