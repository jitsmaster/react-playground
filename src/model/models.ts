export class Contact {
	id: number = 0;
	name: string = "";
	email: string = "";
}

export interface RootState {
	contacts: Contact[];
}