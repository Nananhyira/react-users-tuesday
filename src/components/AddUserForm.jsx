import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Form, Button } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { AddNewUser } from "../actions/userActions";
import {
	doc,
	setDoc,
	collection,
	addDoc,
	serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";

function AddUserForm(props) {
	const [name, setName] = useState("");
	const [gen, setGen] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		let newUser = {
			name,
			gen,
			email,
			id: uuid(),
			timestamp: serverTimestamp(),
		};

		try {
			const docRef = await setDoc(doc(db, "users", newUser.id), newUser);
		} catch (e) {
			console.log(e);
		}

		// dispatch(AddNewUser(newUser));
		// props.AddNewUser({ name, gen, email, id: uuid() });
		// console.log(newUser);
		setName("");
		setGen("");
		setEmail("");
	};
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="Name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Gen</Form.Label>
					<Form.Control
						type="text"
						placeholder="Password"
						value={gen}
						onChange={(e) => {
							setGen(e.target.value);
						}}
					/>
				</Form.Group>

				<Button onClick={handleSubmit} variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

// const mapDispatch = {
// 	AddNewUser: AddNewUser,
// };
// export default connect(null, mapDispatch)(AddUserForm);
export default AddUserForm;
