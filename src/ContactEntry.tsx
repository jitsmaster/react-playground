import { useAppDispatch } from './hooks/hooks';
import { Contact } from './model/models';
import { removeContact } from './store/contactSlice';


function ContactEntry({ contact }: { contact: Contact }) {
	const dispatch = useAppDispatch()
	const handleDeleteContact = (id: number) => {
		dispatch(removeContact(id))
	}
	return (
		<li key={contact.id}>
			{contact.id}: {contact.name} ({contact.email})
			<button onClick={() => handleDeleteContact(contact.id)}>
				Delete
			</button>
		</li>
	);
};

export default ContactEntry;