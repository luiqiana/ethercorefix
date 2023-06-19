import React, { Component } from "react";

import '../../../styles/demos/panel/css/login.css';

import LoginValidation from "./functions/LoginValidation";
import HashLogin from "./functions/HashLogin";
import {IndexContactInputs} from "../../index/Contact";

export let Inputs = {
	user: "",
	pass: ""
}

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: "",
			pass: ""
		}
	}

	formSubmit = (obj) => {
		document.getElementById("LoginButton").setAttribute("disabled", "");
		console.log(obj);
		fetch("http://localhost:3001/api/demos/panel/signin", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(obj)
		}).then(
			response => response.json()
		).then(
			data => {
				this.setState({
					logged: data.valid
				})
			}
		).then(
			this.resetForm
		).catch(
			() => {
				this.setState({
					logged: false,
					formError: true
				});
				this.resetForm();
			}
		);
	}

	resetForm = () => {
		document.getElementById("LoginButton").removeAttribute("disabled");
		this.setState({
			user: "",
			pass: ""
		});
	}

	hash = (obj) => {
		this.formSubmit(HashLogin.hash(obj));
	}

	validate = () => {
		Inputs = {
			user: this.state.user,
			pass: this.state.pass
		};

		const response = LoginValidation.validate();
		if(response) {
			this.hash(response);
		}
		else {
			console.log("Errors");
		}
	}

	changeInputValue(e) {
		const name = e.target.name;
		this.setState({
			[name]: e.target.value
		});
	}

	render() {
		return(
			<section id="login">
				<div className="login-wrapper">
					<form id="loginForm">
						<h2>Sign In</h2>
						<div className="input-wrapper">
							<input type="text" name="user" id="inputUser" className="login-input" required="required" spellCheck="false" onChange={(e) => this.changeInputValue(e)}/>
							<span>Username</span>
							<i />
						</div>
						<div className="input-wrapper">
							<input type="password" name="pass" id="inputPass" className="login-input" required="required" spellCheck="false" onChange={(e) => this.changeInputValue(e)}/>
							<span>Password</span>
							<i />
						</div>
						<div className="links">
							<a className="link" href="./forgotpassword">Forgot password?</a>
							<a className="link" href="./signup">Sign Up</a>
						</div>
						<div className="submit-wrapper">
							<button type="button" onClick={this.validate} id="LoginButton">Login</button>
						</div>
					</form>
				</div>
			</section>
		);
	}
}

export default Login;