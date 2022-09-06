import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Form, Button } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { AddNewUser } from "../actions/userActions";

function AddUserForm(props) {
	const [name, setName] = useState("");
	const [gen, setGen] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		// if (name === "" || gen === "" || email === "") {
		// 	alert("Please fill all the fields");
		// }
		let newUser = { name, gen, email, id: uuid() };
		dispatch(AddNewUser(newUser));
		// props.AddNewUser({ name, gen, email, id: uuid() });
		console.log(newUser);
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
