import ContactEntry from "./ContactEntry";
import { useAppSelector } from "./hooks/hooks.ts";
import { Contact } from "./model/models";

function ContactList() {
	const contacts = useAppSelector(state => state.contacts as Contact[])
	return (
		<ul>
			{contacts.map((contact: Contact) => (
				<ContactEntry key={contact.id} contact={contact} />
			))}
		</ul>
	);
}

export default ContactList;