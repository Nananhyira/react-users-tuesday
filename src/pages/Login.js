import React, { useState } from "react";
import {
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const provider = new GoogleAuthProvider();
	const navigate = useNavigate();
	const handle = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			console.log(user);
			navigate("/home", { replace: true });
		} catch (e) {
			console.log(e);
		}
		setEmail("");
		setPassword("");
	};
	const google = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithPopup(auth, provider);
			console.log(user);
			navigate("/home", { replace: true });
		} catch (e) {
			console.log(e);
		}
		setEmail("");
		setPassword("");
	};

	return (
		<div>
			<h1>Login page</h1>
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
				<button onClick={handle}>login</button>
				<button onClick={google}>sign in with google</button>
			</form>
		</div>
	);
}

export default Login;
