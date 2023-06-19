import React, {Component} from 'react';

import ContactValidation from './functions/ContactValidation';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Alert from "react-bootstrap/Alert";

export var IndexContactInputs = {
	Firstname: '',
	Lastname: '',
	Company: '',
	Email: '',
	Phone: '',
	Country: '',
	Preferredcontact: '',
	Preferredlanguage: '',
	Message: '',
	Terms: false,
	Sent: false
};

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			IndexContactFirstname: '',
			IndexContactLastname: '',
			IndexContactCompany: '',
			IndexContactEmail: '',
			IndexContactPhone: '',
			IndexContactCountry: '',
			IndexContactPreferredContact: '',
			IndexContactPreferredLanguage: '',
			IndexContactMessage: '',
			IndexContactTerms: false,
			IndexContactSent: false,
			IndexContactSuccess: false
		}
	}

	formSubmit = () => {
		this.loader(true);
		fetch("http://141.147.33.121:3001/api/mailer/contact", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(IndexContactInputs)
		}).then(
			response => response.json()
		).then(
			data => {
				this.setState({
					IndexContactSent: data.sent
				});
			}
		).then(
			this.resetForm,
		).catch(
			() => {
				this.setState({
					IndexContactSent: false
				});
				this.resetForm();
			}
		);
	}

	loader = (loading) => {
		const MediumLoader = document.getElementById("IndexContactSubmitLoaderMedium");
		const MediumText = document.getElementById("IndexContactSubmitTextMedium");
		const MediumButton = document.getElementById("IndexContactSubmitMedium");
		const SmallLoader = document.getElementById("IndexContactSubmitLoaderSmall");
		const SmallText = document.getElementById("IndexContactSubmitTextSmall");
		const SmallButton = document.getElementById("IndexContactSubmitSmall");

		if(loading) {
			MediumLoader.style.display = "inline-block";
			MediumText.style.display = "none";
			MediumButton.style.cursor = "not-allowed";
			SmallLoader.style.display = "inline-block";
			SmallText.style.display = "none";
			SmallButton.style.cursor = "not-allowed";
		}
		else {
			MediumLoader.style.display = "none";
			MediumText.style.display = "block";
			MediumButton.style.cursor = "pointer";
			SmallLoader.style.display = "none";
			SmallText.style.display = "block";
			MediumButton.style.cursor = "pointer";
		}
	}

	hideAlert = () => {
		const SuccessAlert = document.getElementById("IndexContactSuccessAlert");
		const FailedAlert = document.getElementById("IndexContactFailedAlert");

		SuccessAlert.classList.remove("contact-alert-active");
		FailedAlert.classList.remove("contact-alert-active");
	}

	showAlert = (alert) => {
		const SuccessAlert = document.getElementById("IndexContactSuccessAlert");
		const FailedAlert = document.getElementById("IndexContactFailedAlert");

		if(alert === "success") {
			SuccessAlert.classList.add("contact-alert-active");
			FailedAlert.classList.remove("contact-alert-active");
		}
		else if(alert === "failed") {
			SuccessAlert.classList.remove("contact-alert-active");
			FailedAlert.classList.add("contact-alert-active");
		}
	}

	resetForm = () => {
		this.loader(false);
		setTimeout(() => {
			if(this.state.IndexContactSent) {
				const FirstnameElement = document.getElementById("IndexContactFirstname");
				const LastnameElement = document.getElementById("IndexContactLastname");
				const CompanyElement = document.getElementById("IndexContactCompany");
				const EmailElement = document.getElementById("IndexContactEmail");
				const PhoneElement = document.getElementById("IndexContactPhone");
				const CountryElement = document.getElementById("IndexContactCountry");
				const PreferredcontactemailElement = document.getElementById("IndexContactPreferredContactEmail");
				const PreferredcontactphoneElement = document.getElementById("IndexContactPreferredContactPhone");
				const PreferredlanguageenglishElement = document.getElementById("IndexContactPreferredLanguageEnglish");
				const PreferredlanguagepolishElement = document.getElementById("IndexContactPreferredLanguagePolish");
				const TermsElement = document.getElementById("IndexContactTerms");
				const MessageElement = document.getElementById("IndexContactMessage");

				FirstnameElement.value = "";
				LastnameElement.value = "";
				CompanyElement.value = "";
				EmailElement.value = "";
				PhoneElement.value = "";
				CountryElement.value = "";
				PreferredcontactemailElement.checked = false;
				PreferredcontactphoneElement.checked = false;
				PreferredlanguageenglishElement.checked = false;
				PreferredlanguagepolishElement.checked = false;
				TermsElement.checked = false;
				MessageElement.value = "";

				IndexContactInputs = {
					Firstname: '',
					Lastname: '',
					Company: '',
					Email: '',
					Phone: '',
					Country: '',
					Preferredcontact: '',
					Preferredlanguage: '',
					Message: '',
					Terms: false,
					Sent: false
				};

				this.setState({
					IndexContactFirstname: '',
					IndexContactLastname: '',
					IndexContactCompany: '',
					IndexContactEmail: '',
					IndexContactPhone: '',
					IndexContactCountry: '',
					IndexContactPreferredContact: '',
					IndexContactPreferredLanguage: '',
					IndexContactMessage: '',
					IndexContactTerms: false,
				});

				this.showAlert("success");

				setTimeout(() => {
					this.setState({
						IndexContactSent: false
					});
					this.hideAlert();
				}, 5000);
			}
			else {
				this.showAlert("failed");

				setTimeout(() => {
					this.hideAlert();
				}, 5000);
			}
		}, 1);

	}

	validateContactForm = () => {
		if(ContactValidation.validateContactForm()) {
			this.formSubmit();
		}
	}

	changeContactForm(e) {
		const name = e.target.name;

		if(name === "IndexContactTerms") {
			const checked = e.target.checked;
			this.setState({[name]: checked});
			switch(name) {
				case "IndexContactTerms":
					IndexContactInputs.Terms = checked;
					break;
				default: break;
			}
		}
		else {
			const value = e.target.value;
			this.setState({[name]: value});
			switch(name) {
				case "IndexContactFirstname":
					IndexContactInputs.Firstname = value;
					break;
				case "IndexContactLastname":
					IndexContactInputs.Lastname = value;
					break;
				case "IndexContactCompany":
					IndexContactInputs.Company = value;
					break;
				case "IndexContactEmail":
					IndexContactInputs.Email = value;
					break;
				case "IndexContactPhone":
					IndexContactInputs.Phone = value;
					break;
				case "IndexContactCountry":
					IndexContactInputs.Country = value;
					break;
				case "IndexContactPreferredContact":
					IndexContactInputs.Preferredcontact = value;
					break;
				case "IndexContactPreferredLanguage":
					IndexContactInputs.Preferredlanguage = value;
					break;
				case "IndexContactMessage":
					IndexContactInputs.Message = value;
					break;
				default: break;
			}
		}
	}

	render() {
		return (
			<>
				<Alert key="ContactSuccess" variant="success" className="position-fixed contact-alert-success" id="IndexContactSuccessAlert" onClose={this.hideAlert} dismissible>
					<i className="bi bi-check-circle display-inline-block pe-1" />
					The contact message has been sent successfully. A copy has been sent to the e-mail address provided in the form (may be in spam).
				</Alert>
				<Alert key="ContactFailed" variant="danger" className="position-fixed contact-alert-failed" id="IndexContactFailedAlert" onClose={this.hideAlert} dismissible>
					<i className="bi bi-exclamation-triangle display-inline-block pe-1" />
					The contact message has not been sent. Please try again later.
				</Alert>
				<section id="contact" className="mb-0 pb-0 pb-md-3">
					<Form id="ContactForm">
						<Container>
							<Row>
								<div className="index-contact-header-wrapper">
									<h1 className="index-contact-header">Contact</h1>
								</div>
								<Col md={4}>
									<Form.Group className="mb-3">
										<Form.Label>First name</Form.Label>
										<Form.Control type="text" placeholder="John" name="IndexContactFirstname" id="IndexContactFirstname" spellCheck="false" onChange={(event) => this.changeContactForm(event)}/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Second name</Form.Label>
										<Form.Control type="text" placeholder="Smith"  name="IndexContactLastname" id="IndexContactLastname" spellCheck="false" onChange={(event) => this.changeContactForm(event)}/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Company (optional)</Form.Label>
										<Form.Control type="text" placeholder="Company"  name="IndexContactCompany" id="IndexContactCompany" spellCheck="false" onChange={(event) => this.changeContactForm(event)}/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>E-mail address</Form.Label>
										<Form.Control type="text" placeholder="john.smith@email.com"  name="IndexContactEmail" id="IndexContactEmail" spellCheck="false" onChange={(event) => this.changeContactForm(event)}/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Phone number</Form.Label>
										<Form.Control type="text" placeholder="+01 123 456 789"  name="IndexContactPhone" id="IndexContactPhone" spellCheck="false" onChange={(event) => this.changeContactForm(event)}/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Country</Form.Label>
										<Form.Control type="text" placeholder="United States"  name="IndexContactCountry" id="IndexContactCountry" spellCheck="false" onChange={(event) => this.changeContactForm(event)}/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Preferred method of contact</Form.Label>
										<div className="index-contact-buttons-wrapper">
											<ButtonGroup className="index-contact-buttongroup" id="IndexContactPreferredContact">
												<input type="radio" className="btn-check" id="IndexContactPreferredContactEmail" autoComplete="off" name="IndexContactPreferredContact" value="email"  onChange={(event) => this.changeContactForm(event)}/>
												<label className="btn btn-outline-ec-cyan" htmlFor="IndexContactPreferredContactEmail" id="IndexContactPreferredContactEmailLabel">E-mail</label>
												<input type="radio" className="btn-check" id="IndexContactPreferredContactPhone" autoComplete="off" name="IndexContactPreferredContact" value="phone"  onChange={(event) => this.changeContactForm(event)}/>
												<label className="btn btn-outline-ec-cyan" htmlFor="IndexContactPreferredContactPhone" id="IndexContactPreferredContactPhoneLabel">Phone</label>
											</ButtonGroup>
										</div>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Preferred contact language</Form.Label>
										<div className="index-contact-buttons-wrapper">
											<ButtonGroup className="index-contact-buttongroup" id="IndexContactPreferredLanguage">
												<input type="radio" className="btn-check" id="IndexContactPreferredLanguageEnglish" autoComplete="off" name="IndexContactPreferredLanguage" value="english" onChange={(event) => this.changeContactForm(event)}/>
												<label className="btn btn-outline-ec-cyan" htmlFor="IndexContactPreferredLanguageEnglish" id="IndexContactPreferredLanguageEnglishLabel">English</label>
												<input type="radio" className="btn-check" id="IndexContactPreferredLanguagePolish" autoComplete="off" name="IndexContactPreferredLanguage" value="polish"  onChange={(event) => this.changeContactForm(event)}/>
												<label className="btn btn-outline-ec-cyan" htmlFor="IndexContactPreferredLanguagePolish" id="IndexContactPreferredLanguagePolishLabel"><i className="index-contact-invisible-i">i</i>Polish<i className="index-contact-invisible-i">i</i></label>
											</ButtonGroup>
										</div>
									</Form.Group>
									<Form.Group className="mb-3 d-none d-md-block">
										<div className="index-contact-submit-wrapper">
											<ButtonGroup className="index-contact-buttongroup">
												<button type="button" className="btn btn-ec-cyan contact-submit-btn" id="IndexContactSubmitMedium" onClick={this.validateContactForm}>
													<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" id="IndexContactSubmitLoaderMedium" style={{display: "none"}}/>
													<p className="index-contact-submit-btn-p" id="IndexContactSubmitTextMedium">Submit</p>
												</button>
											</ButtonGroup>
										</div>
									</Form.Group>
								</Col>
								<Col md={8}>
									<Form.Group className="mb-3">
										<Form.Label>Message</Form.Label>
										<Form.Control as="textarea" spellCheck="false" className="index-contact-form-message" placeholder="I have a question..." name="IndexContactMessage"  id="IndexContactMessage" onChange={(event) => this.changeContactForm(event)}/>
									</Form.Group>
									<Form.Group className="mb-3 d-block d-md-none">
										<div className="index-contact-submit-wrapper">
											<ButtonGroup className="index-contact-buttongroup">
												<button type="button" className="btn btn-ec-cyan" id="IndexContactSubmitSmall" onClick={this.validateContactForm}>
													<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" id="IndexContactSubmitLoaderSmall" style={{display: "none"}}/>
													<p className="index-contact-submit-btn-p" id="IndexContactSubmitTextSmall">Submit</p>
												</button>
											</ButtonGroup>
										</div>
									</Form.Group>
								</Col>
								<Form.Group className="mb-3">
									<div className="index-contact-terms">
										<input className="index-contact-terms-checkbox" type="checkbox" id="IndexContactTerms" name="IndexContactTerms" onChange={(event) => this.changeContactForm(event)}/>
										<label className="index-contact-terms-label ms-3" htmlFor="IndexContactTerms" id="IndexContactTermsLabel">
											I agree with <a href="/legals/terms" className="index-contact-terms-a">terms of service</a> and <a href="/legals/privacy" className="index-contact-terms-a">privacy policy</a>.
										</label>
									</div>
								</Form.Group>
								<Form.Group className="mb-3">
									<div className="index-contact-errors">
										<p className="index-contact-error" id="IndexContactErrorSent" style={{display: "none"}}>You must wait 5 seconds before submitting the form again.</p>
										<p className="index-contact-error" id="IndexContactErrorFirstnameNot" style={{display: "none"}}>The "First name" field must be filled.</p>
										<p className="index-contact-error" id="IndexContactErrorFirstnameNumbers" style={{display: "none"}}>The "First name" field can't contain numbers.</p>
										<p className="index-contact-error" id="IndexContactErrorFirstnameLetters" style={{display: "none"}}>The "First name" field must be at least 3 letters long.</p>
										<p className="index-contact-error" id="IndexContactErrorLastnameNot" style={{display: "none"}}>The "Second name" field must be filled.</p>
										<p className="index-contact-error" id="IndexContactErrorLastnameNumbers" style={{display: "none"}}>The "Second name" field can't contain numbers.</p>
										<p className="index-contact-error" id="IndexContactErrorLastnameLetters" style={{display: "none"}}>The "Second name" field must be at least 3 letters long.</p>
										<p className="index-contact-error" id="IndexContactErrorEmailNot" style={{display: "none"}}>The "E-mail address" field must be filled.</p>
										<p className="index-contact-error" id="IndexContactErrorEmailIncorrect" style={{display: "none"}}>Provided E-mail address isn't correct.</p>
										<p className="index-contact-error" id="IndexContactErrorPhoneNot" style={{display: "none"}}>The "Phone number" field must be filled.</p>
										<p className="index-contact-error" id="IndexContactErrorPhoneIncorrect" style={{display: "none"}}>The "Phone number" field can't contain letters and special signs.</p>
										<p className="index-contact-error" id="IndexContactErrorCountryNot" style={{display: "none"}}>The "Country" field must be filled.</p>
										<p className="index-contact-error" id="IndexContactErrorCountryNumbers" style={{display: "none"}}>The "Country" field can't contain numbers.</p>
										<p className="index-contact-error" id="IndexContactErrorPreferredcontactNot" style={{display: "none"}}>The "Preferred method of contact" must be choosen.</p>
										<p className="index-contact-error" id="IndexContactErrorPreferredcontactBroken" style={{display: "none"}}>The "Preferred method of contact" are broken. Try again later...</p>
										<p className="index-contact-error" id="IndexContactErrorPreferredlanguageNot" style={{display: "none"}}>The "Preferred contact language" must be choosen.</p>
										<p className="index-contact-error" id="IndexContactErrorPreferredlanguageBroken" style={{display: "none"}}>The "Preferred contact language" are broken. Try again later...</p>
										<p className="index-contact-error" id="IndexContactErrorMessageNot" style={{display: "none"}}>The "Message" field must be filled.</p>
										<p className="index-contact-error" id="IndexContactErrorMessageLetters" style={{display: "none"}}>The "Message" field must be at least 20 letters long.</p>
										<p className="index-contact-error" id="IndexContactErrorTerms" style={{display: "none"}}>Please accept terms of service and privacy policy</p>
									</div>
								</Form.Group>
							</Row>
						</Container>
					</Form>
				</section>
			</>
		);
	}
}

export default Contact;