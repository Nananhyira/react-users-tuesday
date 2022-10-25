import React from "react";
import User from "./User";
import { connect, useSelector } from "react-redux";
import { Row, Container } from "react-bootstrap";

function AllUsers(props) {
	// Create mapState function and return the state from the store
	const users  = useSelector((state) => {
		return state.UsersReducer.users;
	});
	return (
		<Container>
			<Row>
				{users.map((item) => {
					return (
						<User
							key={item.id}
							userBio={item}
							delete={props.delete}
							editUser={props.editUser}
						/>
					);
				})}
			</Row>
		</Container>
	);
}

// Create mapState function and return the state from the store

// const mapState = (state) => {
// 	return {
// 		users: state.users,
// 	};
// };
//  export default connect(mapState)(AllUsers);
export default AllUsers;
