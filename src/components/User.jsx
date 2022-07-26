import React from "react";
import { Card, Col, Button } from "react-bootstrap";

function User(props) {
	return (
		<Col md={3} style={{ width: "12rem", marginBottom: "10px" }}>
			<Card>
				<Card.Body>
					<Card.Title>Name:{props.userBio.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						Email:{props.userBio.email}
					</Card.Subtitle>
					<Card.Text>Gen:{props.userBio.gen}</Card.Text>
					<Button href="#" size="sm" variant="primary">
						Edit
					</Button>
					<Button href="#" size="sm" variant="danger">
						Delete
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default User;
