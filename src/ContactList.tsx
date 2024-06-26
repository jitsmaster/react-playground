import ContactEntry from "./ContactEntry.tsx";
import { useAppSelector } from "./hooks/hooks.ts";
import { Contact } from "./model/models.ts";

function ContactList() {
	const contacts = useAppSelector(state => state.contacts.contacts)
	return (
		<ul>
			{contacts.map((contact: Contact) => (
				<ContactEntry key={contact.id} contact={contact} />
			))}
		</ul>
	);
}

export default ContactList;