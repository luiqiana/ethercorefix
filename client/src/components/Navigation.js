import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Navigation extends Component {
	componentDidMount() {
		this.navbarHamburgerCreate();
	}

	navbarHamburgerCreate() {
		Array.prototype.forEach.call(document.getElementsByClassName("navbar-toggler-icon"), function(el) {
			const parent = el.parentNode;
			el.remove();

			for(let i = 0; i < 3; i++) {
				let classNameElement;
				switch(i) {
					case 0:
						classNameElement = "top";
						break;
					case 1:
						classNameElement = "middle";
						break;
					case 2:
						classNameElement = "bottom";
						break;
					default: break;
				}

				const ele = document.createElement("span");
				ele.classList.add("toggler-icon");
				ele.classList.add(`${classNameElement}-bar`);
				parent.appendChild(ele);
			}
		});
	}

	render() {
		return (
			<Navbar className="p-2" bg="light" expand="md" sticky="top" id="navbartop">
				<Navbar.Brand className="ms-0" href="/">Ether Core</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="d-flex d-md-none flex-column justify-content-around"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="/#" id="NavHome">Home</Nav.Link>
						<Nav.Link href="/#about" id="NavAbout">About us</Nav.Link>
						<Nav.Link href="/#portfolio" id="NavPortfolio">Portfolio</Nav.Link>
						<Nav.Link href="/#team" id="NavTeam">Team</Nav.Link>
						<Nav.Link href="/#contact" id="NavContact">Contact</Nav.Link>
						<Nav.Link href="/#pricing" id="NavPricing">Pricing</Nav.Link>
						<NavDropdown title="Additional modules" id="basic-nav-dropdown NavModules" align="start">
							<NavDropdown.Item href="/#modules">Introduction</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/modules/mailer">Mailer</NavDropdown.Item>
							<NavDropdown.Item href="/modules/accounts">Accounts</NavDropdown.Item>
							<NavDropdown.Item href="/modules/discord">Discord widget</NavDropdown.Item>
							<NavDropdown.Item href="/modules/teamspeak">TeamSpeak</NavDropdown.Item>
							<NavDropdown.Item href="/modules/models">3D models</NavDropdown.Item>
							<NavDropdown.Item href="/modules/autopricing">Auto pricing</NavDropdown.Item>
							<NavDropdown.Item href="/modules/configurator">Configurator</NavDropdown.Item>
							<NavDropdown.Item href="/modules/minecraft">Minecraft</NavDropdown.Item>
							<NavDropdown.Item href="/modules/adminpanel">Admin panel</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Navigation;