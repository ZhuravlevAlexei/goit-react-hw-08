import { toast } from 'react-hot-toast';
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  udateContact,
  deleteContact,
} from './operations';
import { logout } from '../auth/operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
        state.items.sort((a, b) => a.name.localeCompare(b.name));
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
        state.items.sort((a, b) => a.name.localeCompare(b.name));
        toast.success(`${action.payload.name} was added successfully!`);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(udateContact.pending, handlePending)
      .addCase(udateContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items[index] = action.payload;
        state.items.sort((a, b) => a.name.localeCompare(b.name));
        toast.success(
          `Contact ${action.payload.name} was updated successfully!`
        );
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        toast.success(
          `Contact ${action.payload.name} was deleted successfully!`
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logout.fulfilled, state => {
        state.items = [];
      });
  },
});

export default contactsSlice.reducer;
