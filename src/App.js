import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import AllUsers from "./components/AllUsers";
import AddUserForm from "./components/AddUserForm";

function App() {
	const [users, setUsers] = useState([
		{
			name: "John",
			gen: 20,
			email: "john@example.com",
			id: "78478chukjchho3fw",
		},
		{
			name: "Jane",
			gen: 21,
			email: "jane@gmail .com",
			id: "hhheiuchieih939u494",
		},
	]);
	const addNewUser = (user) => {
		user.id = Math.random().toString();
		setUsers([...users, user]);
		console.log(user);
	};

	const deleteUser = (id) => {
		setUsers(users.filter((user) => user.id !== id));
		// setUsers(
		// 	users.filter((user) => {
		// 		if (user.id !== id) {
		// 			return user;
		// 		}
		// 	})
		// );
	};
	const EditUser = (id, newData) => {
		setUsers(
			users.map((user) => {
				if (user.id === id) {
					return newData;
				}
				return user;
			})
		);
	};

	return (
		<Container style={{ marginTop: "30px" }}>
			<Row>
				<Col>
					<AddUserForm newUser={addNewUser} />
				</Col>
				<Col>
					<AllUsers userData={users} editUser={EditUser} delete={deleteUser} />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
