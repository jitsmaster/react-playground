import { createSlice } from "@reduxjs/toolkit";
import { Contact } from "./models";

export const contactSlice = createSlice({
	name: 'contact',
	initialState: [] as Contact[],
	reducers: {
		addContact: (state, action) => {
			state.push(action.payload)
		},
		removeContact: (state, action) => {
			state = state.filter(contact => contact.id !== action.payload)
		}
	}
});

export const { addContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;