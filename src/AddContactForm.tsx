import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "./contactSlice";
import { generateId } from "./store";

function AddContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();

	const handleAddContact = () => {
		dispatch(addContact({
			id: generateId().next().value as number,
			name,
			email
		}))
		setName('')
		setEmail('')
	};

	return (<div>
		<input
			type="text"
			value={name}
			onChange={(e) => setName(e.target.value)
			}
		/>
		<br />
		<input
			type="text"
			value={email}
			onChange={(e) => setEmail(e.target.value)}
		/>
		<button onClick={handleAddContact} > Add Contact </button>
	</div>);
}

export default AddContactForm;