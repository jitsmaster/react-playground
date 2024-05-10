import { useSelector } from "react-redux";
import ContactEntry from "./ContactEntry";
import { Contact } from "./models";

function ContactList() {
	const contacts = useSelector((state: any) => state.contacts.contacts)
	return (
		<ul>
			{contacts.map((contact: Contact) => (
				<ContactEntry contact={contact} />
			))}
		</ul>
	);
}

export default ContactList;