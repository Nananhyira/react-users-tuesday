import React from 'react'
import { Card,Button, Row, Col, Container } from "react-bootstrap";
import AllUsers from "../components/AllUsers";
import AddUserForm from "../components/AddUserForm";
import {auth} from "../firebase/config"
import {  signOut } from "firebase/auth";

function Home() {
  const logout =() => {
    try {signOut(auth)}catch(e) {
      console.log(e)
    }
    
  }
  return (
		<Container style={{ marginTop: "30px" }}>
			<Row>
				<Col>
					<AddUserForm
					// newUser={addNewUser}
					/>
				</Col>
				<Col>
					<AllUsers
					// userData={users} editUser={EditUser} delete={deleteUser}
					/>
				</Col>
			</Row>
      <Button onClick={logout} >LogOut</Button>
		</Container>
	);
}

export default Home