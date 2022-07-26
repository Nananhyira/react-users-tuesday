import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import AllUsers from "./components/AllUsers";
import AddUserForm from "./components/AddUserForm";

function App() {
	const [users, setUsers] = useState([
		{ name: "John", gen: 20, email: "john@example.com" },
		{ name: "Jane", gen: 21, email: "jane@gmail .com" },
	]);
	const addNewUser = (user) => {
		setUsers([...users, user]);
	};
	return (
		<Container style={{ marginTop: "30px" }}>
			<Row>
				<Col>
					<AddUserForm newUser={addNewUser} />
				</Col>
				<Col>
					<AllUsers userData={users} />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
