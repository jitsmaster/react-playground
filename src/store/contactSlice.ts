import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Contact } from "../model/models";

export const contactSlice = createSlice({
	name: 'contact',
	initialState: {
		contacts: [] as Contact[]
	},
	reducers: {
		addContact: (state, action) => {
			state.contacts.push(action.payload)
		},
		removeContact: (state, action: PayloadAction<number>) => {
			state.contacts = state.contacts.filter(contact => {
				return contact.id !== action.payload;
			})
		}
	}
});

export const { addContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;