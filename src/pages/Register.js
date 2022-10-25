import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handle = async (e) => {
		e.preventDefault();
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			console.log(user);
			navigate("/login", { replace: true });
		} catch (e) {
			console.log(e);
		}
		setEmail("");
		setPassword("");
	};

	return (
		<div>
			<h1>Register page</h1>
			<form>
				<label>email</label>
				<input
					type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}></input>
				<label>password</label>
				<input
					type="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}></input>
				<button onClick={handle}>create Account</button>
			</form>
		</div>
	);
}

export default Register;
