import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';

export const contactStore = configureStore({
	reducer: {
		contacts: contactReducer
	}
});

let id = 0;

export function* generateId() {
	while (true) {
		yield ++id;
	}
}

