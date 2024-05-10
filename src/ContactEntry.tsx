import { useDispatch } from 'react-redux';
import { removeContact } from './contactSlice';
import { Contact } from './models';


function ContactEntry({ contact }: { contact: Contact }) {
	const dispatch = useDispatch()
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