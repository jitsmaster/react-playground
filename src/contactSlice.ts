import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./models";

export const contactSlice = createSlice({
	name: 'contact',
	initialState: {
		contacts: []
	} as RootState,
	reducers: {
		addContact: (state, action) => {
			state.contacts.push(action.payload)
		},
		removeContact: (state, action) => {
			state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
		}
	}
});

export const { addContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;