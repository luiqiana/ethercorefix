import React, { Component } from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Sidebar from "./elements/Sidebar";

import '../../../styles/demos/panel/css/style.css'
import ButtonGroup from "react-bootstrap/ButtonGroup";

import validateIndexForm from "./functions/validateIndexForm";

export let demopanelIndexForm = {
	formCase: "",
	formMessage: "",
	sent: false
}

class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			formCase: "",
			formMessage: "",
			sent: false
		}
	}

	componentDidMount() {
		this.resize();
		window.addEventListener("resize", this.resize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.resize);
	}

	hideShowElements(state) {
		let statementBlock;
		let statementFlex;
		switch(state) {
			case "hide":
				statementBlock = "none";
				statementFlex = "none";
				break;
			case "show":
				statementBlock = "block";
				statementFlex = "flex";
				break;
			default: break;
		}

		Array.prototype.forEach.call(document.getElementsByClassName("divider"), function(el) {
			el.style.display = statementBlock;
		});

		Array.prototype.forEach.call(document.getElementsByClassName("stat"), function(el) {
			el.style.display = statementFlex;
		});

		Array.prototype.forEach.call(document.getElementsByClassName("form"), function(el) {
			el.style.display = statementBlock;
		});

		Array.prototype.forEach.call(document.getElementsByClassName("log"), function(el) {
			el.style.display = statementFlex;
		});
	}

	resize = () => {
		this.hideShowElements("hide");
		document.getElementById("onlyStats").style.height = document.getElementById("stats").clientHeight - 40 + "px";
		document.getElementById("onlyForms").style.height = document.getElementById("forms").clientHeight - 40 + "px";
		document.getElementById("onlyLogs").style.height = document.getElementById("logs").clientHeight - 40 + "px";
		this.hideShowElements("show");
		document.getElementById("formWrapper").style.minHeight = document.getElementsByClassName("wrapper")[0].clientHeight + "px";
	}

	statsRefresh() {
		const button = document.getElementById("refreshStatsHome");
		const span = document.getElementById("refreshStatsSpanHome");

		button.classList.add("active-anim");
		span.innerHTML = "Refreshing...";

		setTimeout(() => {
			button.classList.remove("active-anim");
			span.innerHTML = "Refresh";
		}, 5000)
	}

	formsRefresh() {
		const button = document.getElementById("refreshFormsHome");
		const span = document.getElementById("refreshFormsSpanHome");

		button.classList.add("active-anim");
		span.innerHTML = "Refreshing...";

		setTimeout(() => {
			button.classList.remove("active-anim");
			span.innerHTML = "Refresh";
		}, 5000)
	}

	logsRefresh() {
		const button = document.getElementById("refreshLogsHome");
		const span = document.getElementById("refreshLogsSpanHome");

		button.classList.add("active-anim");
		span.innerHTML = "Refreshing...";

		setTimeout(() => {
			button.classList.remove("active-anim");
			span.innerHTML = "Refresh";
		}, 5000)
	}

	changeDemoPanelForm = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({
			[name]: value
		});

		switch(name) {
			case "formCase":
				demopanelIndexForm.formCase = value;
				break;
			case "formMessage":
				demopanelIndexForm.formMessage = value;
				break;
			default: break;
		}
	}


	validateDemopanelForm = () => {
		if(validateIndexForm.validate()) {
			console.log("test");
		}
	}

	render() {
		return (
			<section id="index">
				<div className="panel-container p-2">
					<Container fluid className="panel-container-element">
						<Row className="panel-row-element pt-1 pb-2">
							<Col md={6} className="ps-0 ps-md-1 pe-0 pe-md-2">
								<div className="item-wrapper">
									<h4>Statistics</h4>
									<p>Stats of the page</p>
									<div className="wrapper">
										<div className="stats" id="stats">
											<div className="only-stats" id="onlyStats">
												<div className="stat">
													<span className="title">Currently viewing:</span>
													<span className="stat">8</span>
												</div>
												<div className="divider" />
												<div className="stat">
													<span className="title">Visit counter:</span>
													<span className="stat">69</span>
												</div>
												<div className="divider" />
												<div className="stat">
													<span className="title">Forms sent:</span>
													<span className="stat">2</span>
												</div>
											</div>
											<div className="refresh-item">
												<button className="refresh" id="refreshStatsHome" onClick={this.statsRefresh}>
													<i className="bi bi-arrow-clockwise"></i>
													<span className="ps-1" id="refreshStatsSpanHome">Refresh</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</Col>
							<Col md={6} className="pt-4 pt-md-0 pe-0 pe-md-1 ps-0 ps-md-2">
								<div className="item-wrapper">
									<h4>Unread forms</h4>
									<p>Check your unread forms</p>
									<div className="wrapper">
										<div className="forms" id="forms">
											<div className="only-forms" id="onlyForms">
												<div className="form">
													<div className="header">
														<h5>John Smith</h5>
														<span>01.01.2022</span>
													</div>
													<div className="p-wrapper">
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ipsam ipsum omnis possimus similique! Consequatur, dolorem, quaerat. Culpa delectus facere fuga illo libero quasi, temporibus. Officiis provident quae quos voluptate!</p>
													</div>
												</div>
											</div>
											<div className="refresh-item">
												<button className="refresh" id="refreshFormsHome" onClick={this.formsRefresh}>
													<i className="bi bi-arrow-clockwise"></i>
													<span className="ps-1" id="refreshFormsSpanHome">Refresh</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</Col>
						</Row>
						<Row className="panel-row-element pt-2 pb-3 pb-md-1">
							<Col md={6} className="ps-0 ps-md-1 pe-0 pe-md-2">
								<div className="item-wrapper">
									<h4>Unread logs</h4>
									<p>Check your unread logs</p>
									<div className="wrapper">
										<div className="logs" id="logs">
											<div className="only-logs" id="onlyLogs">
												<div className="log">
													<div className="text-wrapper">
														<span className="normal">normal</span>
														<p className="ms-2">> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut consectetur cum cumque eligendi, est ex expedita ipsa, ipsam itaque, libero molestias necessitatibus obcaecati officiis omnis quaerat quasi sapiente voluptatem.</p>
													</div>
													<span className="date">01.01.2022</span>
												</div>
												<div className="divider" />
												<div className="log">
													<div className="text-wrapper">
														<span className="important">important</span>
														<p className="ms-2">> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut consectetur cum cumque eligendi, est ex expedita ipsa, ipsam itaque, libero molestias necessitatibus obcaecati officiis omnis quaerat quasi sapiente voluptatem.</p>
													</div>
													<span className="date">01.01.2022</span>
												</div>
											</div>
											<div className="refresh-item">
												<button className="refresh" id="refreshLogsHome" onClick={this.logsRefresh}>
													<i className="bi bi-arrow-clockwise"></i>
													<span className="ps-1" id="refreshLogsSpanHome">Refresh</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</Col>
							<Col md={6} className="pt-4 pt-md-0 pe-0 pe-md-1 ps-0 ps-md-2">
								<div className="item-wrapper" id="formItemWrapper">
									<h4>Developer contact</h4>
									<p>Contact to site developers</p>
									<div className="wrapper p-4 pb-2" id="formWrapper">
										<Form id="indexForm">
											<div className="only-inputs">
												<Form.Group className="mb-3">
													<Form.Label className="m-0">What is the contact case?</Form.Label>
													<Form.Control type="text" placeholder="Important log"  name="formCase" id="formCase" spellCheck="false" onChange={(event) => this.changeDemoPanelForm(event)}/>
												</Form.Group>
												<Form.Group className="mb-1">
													<Form.Label className="m-0">Message</Form.Label>
													<Form.Control className="demopanel-form-message" as="textarea" placeholder="I have important log and I don't know what should I do with it."  name="formMessage" id="formMessage" spellCheck="true" onChange={(event) => this.changeDemoPanelForm(event)}/>
												</Form.Group>
											</div>
											<Form.Group className="mb-3">
												<div className="demopanel-index-form-errors">
													<p className="demopanel-index-form-error" id="sentError">You must wait 5 seconds before submitting the form again.</p>
													<p className="demopanel-index-form-error" id="caseError">The "Contact case" field must be at least 4 letters long.</p>
													<p className="demopanel-index-form-error" id="messageError">The "Message" field must be at least 20 letters long.</p>
												</div>
											</Form.Group>
											<Form.Group className="mt-auto">
												<div className="demopanel-form-submit-wrapper">
													<ButtonGroup className="index-contact-buttongroup" onClick={this.validateDemopanelForm}>
														<button type="button" className="btn btn-ec-cyan">
															<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{display: "none"}} id="formSpinner"/>
															<p className="m-0" id="formSubmitText">Submit</p>
														</button>
													</ButtonGroup>
												</div>
											</Form.Group>
										</Form>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="sidenav-container">
					<Sidebar activeSite="home"/>
				</div>
			</section>
		);
	}
}

export default Index;