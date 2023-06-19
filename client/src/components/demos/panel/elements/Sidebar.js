import React, { Component } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import {IoIosArrowDropleft} from "react-icons/io";

function getUser() {
	return "User";
}

class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			smallDropdown: false,
			mediumDropdown: false
		}
	}

	componentDidMount() {
		(document.getElementById("footer")).style.display = "none";

		const navHome = document.getElementsByClassName("active-home");
		const navContactforms = document.getElementsByClassName("active-contactforms");
		const navLogs = document.getElementsByClassName("active-logs");
		switch(this.props.activeSite) {
			case "home":
				Array.prototype.forEach.call(navHome, function(el) {
					el.classList.add("active-own");
				});
				break;

			case "contactforms":
				Array.prototype.forEach.call(navContactforms, function(el) {
					el.classList.add("active-own");
				});
				break;

			case "logs":
				Array.prototype.forEach.call(navLogs, function(el) {
					el.classList.add("active-own");
				});
				break;

			default: break;
		}

		window.addEventListener("click", (e) => {
			if(this.state.smallDropdown) {
				if(!(document.getElementById("smallDropdown") && document.getElementById("smallDropdownButton")).contains(e.target)) {
					this.smallDropdown();
				}
			}

			if(this.state.mediumDropdown) {
				if(!(document.getElementById("mediumDropdown") && document.getElementById("mediumDropdownButton")).contains(e.target)) {
					this.mediumDropdown();
				}
			}
		});
	}

	componentWillUnmount() {
		(document.getElementById("footer")).style.display = "block";

		Array.prototype.forEach.call(document.getElementsByClassName("active-own"), function(el) {
			el.classList.remove("active-own");
		});


		window.removeEventListener("click", (e) => {
			if(this.state.smallDropdown) {
				if(!(document.getElementById("smallDropdown") && document.getElementById("smallDropdownButton")).contains(e.target)) {
					this.smallDropdown();
				}
			}

			if(this.state.mediumDropdown) {
				if(!(document.getElementById("mediumDropdown") && document.getElementById("mediumDropdownButton")).contains(e.target)) {
					this.mediumDropdown();
				}
			}
		});
	}

	smallDropdown = () => {
		const smallDropdown = document.getElementById("smallDropdown");

		if(this.state.smallDropdown) {
			smallDropdown.style.display = "none";
			this.setState({
				smallDropdown: false
			});
		}
		else {
			smallDropdown.style.display = "block";
			this.setState({
				smallDropdown: true
			});
		}
	}

	mediumDropdown = () => {
		const mediumDropdown = document.getElementById("mediumDropdown");

		if(this.state.mediumDropdown) {
			mediumDropdown.style.display = "none";
			this.setState({
				mediumDropdown: false
			});
		}
		else {
			mediumDropdown.style.display = "block";
			this.setState({
				mediumDropdown: true
			});
		}
	}

	render() {
		return(
			<>
				{
					//  Small sidenav
				}
				<div className="bottom-nav d-flex d-md-none">
					<div className="item">
						<div className="item-container">
							<a className="item-a" href="/demos">
								<IoIosArrowDropleft className="back-icon"/>
							</a>
						</div>

					</div>
					<div className="item">
						<div className="item-container active-home">
							<a className="item-a" href="/demos/panel">
								<i className="bi bi-house-fill" />
							</a>
						</div>
					</div>
					<div className="item">
						<div className="item-container active-contactforms">
							<a className="item-a" href="/demos/panel/contactforms">
								<i className="bi bi-envelope" />
							</a>
						</div>
					</div>
					<div className="item">
						<div className="item-container active-logs">
							<a className="item-a" href="/demos/panel/logs">
								<i className="bi bi-file-earmark-text" />
							</a>
						</div>
					</div>
					<div className="item user-wrapper">
						<button className="user-button" id="smallDropdownButton" onClick={this.smallDropdown}>
							<img className="user" src={require('./../../../../imgs/demos/panel/user.webp')} alt="user"/>
							<div className="arrow dropdown-toggle" />
						</button>
						<div className="dropdown-small" id="smallDropdown">
							<div className="item-wrapper-sidebar">
								<a className="item" href="/demos/panel/user/profile">Profile</a>
							</div>
							<div className="item-wrapper-sidebar">
								<a className="item" href="/demos/panel/user/settings">Settings</a>
							</div>
							<div className="divider" />
							<div className="item-wrapper-sidebar">
								<a className="item" href="/demos/panel/logout">Log out</a>
							</div>
						</div>
					</div>
				</div>

				{
					//  Medium sidenav
				}
				<div className="side-nav-md flex-column flex-shrink-0 p-3 d-none d-md-flex d-lg-none">
					<a href="/demos" className="header d-flex align-items-center me-md-auto text-decoration-none">
						<IoIosArrowDropleft className="back-icon"/>
					</a>
					<hr />
					<ul className="pills nav nav-pills flex-column mb-auto">
						<li className="nav-item">
							<a href="/demos/panel" className="nav-link active-home">
								<i className="bi bi-house-fill" />
							</a>
						</li>
						<li className="nav-item">
							<a href="/demos/panel/contactforms" className="nav-link active-contactforms">
								<i className="bi bi-envelope" />
							</a>
						</li>
						<li className="nav-item">
							<a href="/demos/panel/logs" className="nav-link active-logs">
								<i className="bi bi-file-earmark-text" />
							</a>
						</li>
					</ul>
					<hr />
					<div className="user-wrapper">
						<button className="user-button" id="mediumDropdownButton" onClick={this.mediumDropdown}>
							<div className="arrow dropdown-toggle" />
							<div className="img-wrapper">
								<img className="user" src={require('./../../../../imgs/demos/panel/user.webp')} alt="user"/>
							</div>
						</button>
						<div className="dropdown-medium" id="mediumDropdown">
							<div className="item-wrapper">
								<a className="item" href="/demos/panel/user/profile">Profile</a>
							</div>
							<div className="item-wrapper">
								<a className="item" href="/demos/panel/user/settings">Settings</a>
							</div>
							<div className="divider" />
							<div className="item-wrapper">
								<a className="item" href="/demos/panel/logout">Log out</a>
							</div>
						</div>
					</div>
				</div>

				{
					//  Large sidenav
				}
				<div className="side-nav-lg flex-column flex-shrink-0 p-3 d-none d-lg-flex">
					<a href="/demos" className="header d-flex align-items-center me-md-auto text-decoration-none">
						<IoIosArrowDropleft className="back-icon"/>
						<span className="ms-2">Back to demos</span>
					</a>
					<hr />
					<ul className="pills nav nav-pills flex-column mb-auto">
						<li className="nav-item">
							<a href="/demos/panel" className="nav-link active-home">
								<i className="bi bi-house-fill" />
								<span className="ms-2">Home</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="/demos/panel/contactform" className="nav-link active-contactforms">
								<i className="bi bi-envelope" />
								<span className="ms-2">Contact forms</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="/demos/panel/logs" className="nav-link active-logs">
								<i className="bi bi-file-earmark-text" />
								<span className="ms-2">Logs</span>
							</a>
						</li>
					</ul>
					<hr />
					<DropdownButton className="user-dropdown" title={getUser()} drop="up" id="dropdown-button-drop-up" key="up" variant="danger">
						<Dropdown.Item href="/demos/panel/user/profile">Profile</Dropdown.Item>
						<Dropdown.Item href="/demos/panel/user/settings">Settings</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item href="/demos/panel/logout">Log out</Dropdown.Item>
					</DropdownButton>
				</div>
			</>
		);
	}
}

export default Sidebar;