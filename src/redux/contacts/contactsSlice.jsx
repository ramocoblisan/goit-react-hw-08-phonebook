import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const contactsInitialState = {
    contacts: [],
    isLoading: false,
    error: null
  };

  const handlePending = (state) => {
    state.isLoading = true;
  };

  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  
  const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: builder => {
      builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.contacts = action.payload;
        })
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.contacts.push(action.payload);
        })
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          const index = state.contacts.findIndex(
            item => item.id === action.payload.id
          );
          if (index > -1) {
            state.contacts.splice(index, 1);
          }
        })
        .addCase(deleteContact.rejected, handleRejected)
      },
    })
  
  export const contactsReducer = contactsSlice.reducer;