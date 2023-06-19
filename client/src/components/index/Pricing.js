import React, {Component} from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Alert from "react-bootstrap/Alert";

import PricingValidation from "./functions/PricingValidation";

export var IndexPricingInputs = {
	Mailer: false,
	MailerInfo: {
		Form: false,
		News: false,
		Other: false,
		OtherInput: ''
	},
	Accounts: false,
	AccountsInfo: {
		Peoples: '',
		OtherInput: ''
	},
	Discord: false,
	Teamspeak: false,
	TeamspeakInfo: {
		Link: false,
		Manager: false
	},
	Models: false,
	ModelsInfo: {
		OwnModels: ''
	},
	Autopricing: false,
	Configurator: false,
	ConfiguratorInfo: {
		OtherInput: ''
	},
	Minecraft: false,
	MinecraftInfo: {
		Itemshop: false,
		Bans: false,
		Other: false,
		OtherInput: ''
	},
	Adminpanel: false,
	AdminpanelInfo: {
		OtherInput: ''
	},
	OtherInput: '',
	Firstname: '',
	Lastname: '',
	Company: '',
	Email: '',
	Phone: '',
	Country: '',
	Preferredcontact: '',
	Preferredlanguage: '',
	Terms: false,
	Sent: false
};

class Pricing extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ModuleMailer: '',
			MailerInfoForm: '',
			MailerInfoNews: '',
			MailerInfoOther: '',
			MailerInfoOtherTextarea: '',
			ModuleAccounts: '',
			AccountsInfo: '',
			AccountsInfoOtherTextarea: '',
			ModuleDiscord: '',
			ModuleTs: '',
			TsInfoLink: '',
			TsInfoManager: '',
			Module3d: '',
			TdInfo: '',
			ModuleAutopricing: '',
			ModuleConfigurator: '',
			ConfiguratorInfoOtherTextarea: '',
			ModuleMinecraft: '',
			MinecraftInfoItemshop: '',
			MinecraftInfoBans: '',
			MinecraftInfoOther: '',
			MinecraftInfoOtherTextarea: '',
			ModuleAdminpanel: '',
			AdminpanelInfoOtherTextarea:'',
			OtherTextarea: '',
			Firstname: '',
			Lastname: '',
			Company: '',
			Email: '',
			Phone: '',
			Country: '',
			PreferredContact: '',
			PreferredLanguage: '',
			Terms: '',
			Sent: ''
		}
	}

	loader = (loading) => {
		const MediumLoader = document.getElementById("IndexPricingSubmitLoaderMedium");
		const MediumText = document.getElementById("IndexPricingSubmitTextMedium");
		const MediumButton = document.getElementById("IndexPricingSubmitButtonMedium");
		const SmallLoader = document.getElementById("IndexPricingSubmitLoaderSmall");
		const SmallText = document.getElementById("IndexPricingSubmitTextSmall");
		const SmallButton = document.getElementById("IndexPricingSubmitButtonSmall");

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
			SmallButton.style.cursor = "pointer";
		}
	}

	hideAlert = () => {
		const SuccessAlert = document.getElementById("IndexPricingSuccessAlert");
		const FailedAlert = document.getElementById("IndexPricingFailedAlert");

		SuccessAlert.classList.remove("pricing-alert-active");
		FailedAlert.classList.remove("pricing-alert-active");
	}

	showAlert = (alert) => {
		const SuccessAlert = document.getElementById("IndexPricingSuccessAlert");
		const FailedAlert = document.getElementById("IndexPricingFailedAlert");

		if(alert === "success") {
			SuccessAlert.classList.add("pricing-alert-active");
			FailedAlert.classList.remove("pricing-alert-active");
		}
		else if(alert === "failed") {
			SuccessAlert.classList.remove("pricing-alert-active");
			FailedAlert.classList.add("pricing-alert-active");
		}
	}

	changePricingForm = (e) => {
		const name = e.target.name;

		const mailerTextareaElement = document.getElementById("IndexPricingModuleMailerInfoOtherTextarea");
		const minecraftTextareaElement = document.getElementById("IndexPricingModuleMinecraftInfoOtherTextarea")

		if(e.target.type === "checkbox") {
			if(name === "IndexPricingTerms") {
				this.setState({
					[name.substr(12)]: e.target.checked
				});

				IndexPricingInputs.Terms = e.target.checked;
			}
			else {
				this.setState({
					[name.substr(18)]: e.target.checked
				});

				setTimeout(() => {
					switch(name.substr(18)) {
						case "MailerInfoForm":
							IndexPricingInputs.MailerInfo.Form = this.state.MailerInfoForm;
							break;
						case "MailerInfoNews":
							IndexPricingInputs.MailerInfo.News = this.state.MailerInfoNews;
							break;
						case "MailerInfoOther":
							IndexPricingInputs.MailerInfo.Other = this.state.MailerInfoOther;
							if(this.state.MailerInfoOther) {
								mailerTextareaElement.classList.remove("index-pricing-module-info-other-deactivate");
								mailerTextareaElement.removeAttribute("disabled");
							}
							else {
								mailerTextareaElement.classList.add("index-pricing-module-info-other-deactivate");
								mailerTextareaElement.setAttribute("disabled",  "true");
							}
							break;
						case "TsInfoLink":
							IndexPricingInputs.TeamspeakInfo.Link = this.state.TsInfoLink;
							break;
						case "TsInfoManager":
							IndexPricingInputs.TeamspeakInfo.Manager = this.state.TsInfoManager;
							break;
						case "MinecraftInfoItemshop":
							IndexPricingInputs.MinecraftInfo.Itemshop = this.state.MinecraftInfoItemshop;
							break;
						case "MinecraftInfoBans" :
							IndexPricingInputs.MinecraftInfo.Bans = this.state.MinecraftInfoBans;
							break;
						case "MinecraftInfoOther":
							IndexPricingInputs.MinecraftInfo.Other = this.state.MinecraftInfoOther;
							if(this.state.MinecraftInfoOther) {
								minecraftTextareaElement.classList.remove("index-pricing-module-info-other-deactivate");
								minecraftTextareaElement.removeAttribute("disabled");
							}
							else {
								minecraftTextareaElement.classList.add("index-pricing-module-info-other-deactivate");
								minecraftTextareaElement.setAttribute("disabled",  "true");
							}
							break;
						default: break;
					}
				}, 1);
			}
		}
		else if(e.target.type === "radio") {
			if(name === "IndexPricingPreferredContact" || name === "IndexPricingPreferredLanguage") {
				this.setState({
					[name.substr(12)]: e.target.value
				});

				setTimeout(() => {
					switch(name.substr(12)) {
						case "PreferredContact":
							IndexPricingInputs.Preferredcontact = this.state.PreferredContact;
							break;
						case "PreferredLanguage":
							IndexPricingInputs.Preferredlanguage = this.state.PreferredLanguage;
							break;
						default: break;
					}
				}, 1);
			}
			else {
				this.setState({
					[name.substr(18)]: e.target.value
				});

				setTimeout(() => {
					switch(name.substr(18)) {
						case "AccountsInfo":
							IndexPricingInputs.AccountsInfo.Peoples = this.state.AccountsInfo;
							break;
						case "TdInfo":
							IndexPricingInputs.ModelsInfo.OwnModels = this.state.TdInfo;
							break;
						default: break;
					}
				}, 1);
			}
		}
		else if(e.target.type === "textarea") {
			this.setState({
				[name.substr(18)]: e.target.value
			});

			setTimeout(() => {
				switch(name.substr(18)) {
					case "MailerInfoOtherTextarea":
						IndexPricingInputs.MailerInfo.OtherInput = this.state.MailerInfoOtherTextarea;
						break;
					case "AccountsInfoOtherTextarea":
						IndexPricingInputs.AccountsInfo.OtherInput = this.state.AccountsInfoOtherTextarea;
						break;
					case "ConfiguratorInfoOtherTextarea":
						IndexPricingInputs.ConfiguratorInfo.OtherInput = this.state.ConfiguratorInfoOtherTextarea;
						break;
					case "MinecraftInfoOtherTextarea":
						IndexPricingInputs.MinecraftInfo.OtherInput = this.state.MinecraftInfoOtherTextarea;
						break;
					case "AdminpanelInfoOtherTextarea":
						IndexPricingInputs.AdminpanelInfo.OtherInput = this.state.AdminpanelInfoOtherTextarea;
						break;
					case "OtherTextarea":
						IndexPricingInputs.OtherInput = this.state.OtherTextarea;
						break;
					default: break;
				}
			}, 1);
		}
		else if(e.target.type === "text") {
			this.setState({
				[name.substr(12)]: e.target.value
			});

			setTimeout(() => {
				switch(name.substr(12)) {
					case "Firstname":
						IndexPricingInputs.Firstname = this.state.Firstname;
						break;
					case "Lastname":
						IndexPricingInputs.Lastname = this.state.Lastname;
						break;
					case "Company":
						IndexPricingInputs.Company = this.state.Company;
						break;
					case "Email":
						IndexPricingInputs.Email = this.state.Email;
						break;
					case "Phone":
						IndexPricingInputs.Phone = this.state.Phone;
						break;
					case "Country":
						IndexPricingInputs.Country = this.state.Country;
						break;
					default: break;
				}
			}, 1);
		}
	}


	validatePricingForm = () => {
		if(PricingValidation.validatePricingForm()) {
			this.formSubmit();
		}
	}

	resetForm = () => {
		this.loader(false);
		setTimeout(() => {
			if(this.state.Sent) {
				const Mailer = document.getElementById("IndexPricingModuleMailer");
				const MailerForm = document.getElementById("IndexPricingModuleMailerInfoFormButton");
				const MailerNews = document.getElementById("IndexPricingModuleMailerInfoNewsButton");
				const MailerOther = document.getElementById("IndexPricingModuleMailerInfoOtherButton");
				const MailerInput = document.getElementById("IndexPricingModuleMailerInfoOtherTextarea");
				const Accounts = document.getElementById("IndexPricingModuleAccounts");
				const Accounts100 = document.getElementById("IndexPricingModuleAccountsInfo100Button");
				const Accounts1000 = document.getElementById("IndexPricingModuleAccountsInfo1000Button");
				const AccountsMore = document.getElementById("IndexPricingModuleAccountsInfoMoreButton");
				const AccountsInput = document.getElementById("IndexPricingModuleAccountsInfoOtherTextarea");
				const Discord = document.getElementById("IndexPricingModuleDiscord");
				const Teamspeak = document.getElementById("IndexPricingModuleTs");
				const TeamspeakLink = document.getElementById("IndexPricingModuleTsInfoLinkButton");
				const TeamspeakManager = document.getElementById("IndexPricingModuleTsInfoManagerButton");
				const Models = document.getElementById("IndexPricingModule3d");
				const ModelsYes = document.getElementById("IndexPricingModule3dInfoYesButton");
				const ModelsNo = document.getElementById("IndexPricingModule3dInfoNoButton");
				const Autopricing = document.getElementById("IndexPricingModuleAutopricing");
				const Configurator = document.getElementById("IndexPricingModuleConfigurator");
				const ConfiguratorInput = document.getElementById("IndexPricingModuleConfiguratorInfoOtherTextarea");
				const Minecraft = document.getElementById("IndexPricingModuleMinecraft");
				const MinecraftItemshop = document.getElementById("IndexPricingModuleMinecraftInfoItemshopButton");
				const MinecraftBans = document.getElementById("IndexPricingModuleMinecraftInfoBansButton");
				const MinecraftOther = document.getElementById("IndexPricingModuleMinecraftInfoOtherButton");
				const MinecraftInput = document.getElementById("IndexPricingModuleMinecraftInfoOtherTextarea");
				const Adminpanel = document.getElementById("IndexPricingModuleAdminpanel");
				const AdminpanelInput = document.getElementById("IndexPricingModuleAdminpanelInfoOtherTextarea");
				const Message = document.getElementById("IndexPricingModuleOtherTextarea");
				const FirstnameElement = document.getElementById("IndexPricingFirstname");
				const LastnameElement = document.getElementById("IndexPricingLastname");
				const CompanyElement = document.getElementById("IndexPricingCompany");
				const EmailElement = document.getElementById("IndexPricingEmail");
				const PhoneElement = document.getElementById("IndexPricingPhone");
				const CountryElement = document.getElementById("IndexPricingCountry");
				const PreferredcontactemailElement = document.getElementById("IndexPricingPreferredContactEmail");
				const PreferredcontactphoneElement = document.getElementById("IndexPricingPreferredContactPhone");
				const PreferredlanguageenglishElement = document.getElementById("IndexPricingPreferredLanguageEnglish");
				const PreferredlanguagepolishElement = document.getElementById("IndexPricingPreferredLanguagePolish");
				const TermsElement = document.getElementById("IndexPricingTerms");

				const mailerElement = document.getElementById("IndexPricingModuleMailerInfo");
				const accountsElement = document.getElementById("IndexPricingModuleAccountsInfo");
				const tsElement = document.getElementById("IndexPricingModuleTsInfo");
				const tdElement = document.getElementById("IndexPricingModule3dInfo");
				const configuratorElement = document.getElementById("IndexPricingModuleConfiguratorInfo");
				const minecraftElement = document.getElementById("IndexPricingModuleMinecraftInfo");
				const adminpanelElement = document.getElementById("IndexPricingModuleAdminpanelInfo");

				Mailer.checked = false;
				MailerForm.checked = false;
				MailerNews.checked = false;
				MailerOther.checked = false;
				MailerInput.value = "";
				Accounts.checked = false;
				Accounts100.checked = false;
				Accounts1000.checked = false;
				AccountsMore.checked = false;
				AccountsInput.value = "";
				Discord.checked = false;
				Teamspeak.checked = false;
				TeamspeakLink.checked = false;
				TeamspeakManager.checked = false;
				Models.checked = false;
				ModelsYes.checked = false;
				ModelsNo.checked = false;
				Autopricing.checked = false;
				Configurator.checked = false;
				ConfiguratorInput.value = "";
				Minecraft.checked = false;
				MinecraftItemshop.checked = false;
				MinecraftBans.checked = false;
				MinecraftOther.checked = false;
				MinecraftInput.value = "";
				Adminpanel.checked = false;
				AdminpanelInput.value = "";
				Message.value = "";
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

				IndexPricingInputs = {
					Mailer: false,
					MailerInfo: {
						Form: false,
						News: false,
						Other: false,
						OtherInput: ''
					},
					Accounts: false,
					AccountsInfo: {
						Peoples: '',
						OtherInput: ''
					},
					Discord: false,
					Teamspeak: false,
					TeamspeakInfo: {
						Link: false,
						Manager: false
					},
					Models: false,
					ModelsInfo: {
						OwnModels: ''
					},
					Autopricing: false,
					Configurator: false,
					ConfiguratorInfo: {
						OtherInput: ''
					},
					Minecraft: false,
					MinecraftInfo: {
						Itemshop: false,
						Bans: false,
						Other: false,
						OtherInput: ''
					},
					Adminpanel: false,
					AdminpanelInfo: {
						OtherInput: ''
					},
					OtherInput: '',
					Firstname: '',
					Lastname: '',
					Company: '',
					Email: '',
					Phone: '',
					Country: '',
					Preferredcontact: '',
					Preferredlanguage: '',
					Terms: false,
					Sent: false
				};

				this.setState({
					ModuleMailer: '',
					MailerInfoForm: '',
					MailerInfoNews: '',
					MailerInfoOther: '',
					MailerInfoOtherTextarea: '',
					ModuleAccounts: '',
					AccountsInfo: '',
					AccountsInfoOtherTextarea: '',
					ModuleDiscord: '',
					ModuleTs: '',
					TsInfoLink: '',
					TsInfoManager: '',
					Module3d: '',
					TdInfo: '',
					ModuleAutopricing: '',
					ModuleConfigurator: '',
					ConfiguratorInfoOtherTextarea: '',
					ModuleMinecraft: '',
					MinecraftInfoItemshop: '',
					MinecraftInfoBans: '',
					MinecraftInfoOther: '',
					MinecraftInfoOtherTextarea: '',
					ModuleAdminpanel: '',
					AdminpanelInfoOtherTextarea:'',
					OtherTextarea: '',
					Firstname: '',
					Lastname: '',
					Company: '',
					Email: '',
					Phone: '',
					Country: '',
					PreferredContact: '',
					PreferredLanguage: '',
					Terms: '',
					Sent: ''
				});

				this.showAlert("success");

				mailerElement.classList.remove("index-pricing-module-info-active");
				accountsElement.classList.remove("index-pricing-module-info-active");
				tsElement.classList.remove("index-pricing-module-info-active");
				tdElement.classList.remove("index-pricing-module-info-active");
				configuratorElement.classList.remove("index-pricing-module-info-active");
				minecraftElement.classList.remove("index-pricing-module-info-active");
				adminpanelElement.classList.remove("index-pricing-module-info-active");

				console.log(1);
				setTimeout(() => {
					this.setState({
						Sent: false
					});
					console.log(2);
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

	formSubmit = () => {
		this.loader(true);
		fetch("https://api.ether-core.com/api/mailer/pricing", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(IndexPricingInputs)
		}).then(
			response => response.json()
		).then(
			data => {
				this.setState({
					Sent: data.sent
				});
			}
		).then(
			this.resetForm
		).catch(
			() => {
				this.setState({
					Sent: false
				});
				this.resetForm();
			}
		);
	}

	expandModuleInfos = (e) => {
		const name = e.target.name;

		const mailerElement = document.getElementById("IndexPricingModuleMailerInfo");
		const accountsElement = document.getElementById("IndexPricingModuleAccountsInfo");
		const tsElement = document.getElementById("IndexPricingModuleTsInfo");
		const tdElement = document.getElementById("IndexPricingModule3dInfo");
		const configuratorElement = document.getElementById("IndexPricingModuleConfiguratorInfo");
		const minecraftElement = document.getElementById("IndexPricingModuleMinecraftInfo");
		const adminpanelElement = document.getElementById("IndexPricingModuleAdminpanelInfo");

		this.setState({
			[name.substr(12)]: e.target.checked
		});

		setTimeout(() => {
			switch(name.substr(12)) {
				case "ModuleMailer":
					IndexPricingInputs.Mailer = this.state.ModuleMailer;
					if(this.state.ModuleMailer) {
						mailerElement.classList.add("index-pricing-module-info-active");
					}
					else {
						mailerElement.classList.remove("index-pricing-module-info-active");
					}
					break;
				case "ModuleAccounts":
					IndexPricingInputs.Accounts = this.state.ModuleAccounts;
					if(this.state.ModuleAccounts) {
						accountsElement.classList.add("index-pricing-module-info-active");
					}
					else {
						accountsElement.classList.remove("index-pricing-module-info-active");
					}
					break;
				case "ModuleDiscord":
					IndexPricingInputs.Discord = this.state.ModuleDiscord;
					break;
				case "ModuleTs":
					IndexPricingInputs.Teamspeak = this.state.ModuleTs;
					if(this.state.ModuleTs) {
						tsElement.classList.add("index-pricing-module-info-active");
					}
					else {
						tsElement.classList.remove("index-pricing-module-info-active");
					}
					break;
				case "Module3d":
					IndexPricingInputs.Models = this.state.Module3d;
					if(this.state.Module3d) {
						tdElement.classList.add("index-pricing-module-info-active");
					}
					else {
						tdElement.classList.remove("index-pricing-module-info-active");
					}
					break;
				case "ModuleAutopricing":
					IndexPricingInputs.Autopricing = this.state.ModuleAutopricing;
					break;
				case "ModuleConfigurator":
					IndexPricingInputs.Configurator = this.state.ModuleConfigurator;
					if(this.state.ModuleConfigurator) {
						configuratorElement.classList.add("index-pricing-module-info-active");
					}
					else {
						configuratorElement.classList.remove("index-pricing-module-info-active");
					}
					break;
				case "ModuleMinecraft":
					IndexPricingInputs.Minecraft = this.state.ModuleMinecraft;
					if(this.state.ModuleMinecraft) {
						minecraftElement.classList.add("index-pricing-module-info-active");
					}
					else {
						minecraftElement.classList.remove("index-pricing-module-info-active");
					}
					break;
				case "ModuleAdminpanel":
					IndexPricingInputs.Adminpanel = this.state.ModuleAdminpanel;
					if(this.state.ModuleAdminpanel) {
						adminpanelElement.classList.add("index-pricing-module-info-active");
					}
					else {
						adminpanelElement.classList.remove("index-pricing-module-info-active");
					}
					break;
				default: break;
			}
		}, 1);

	}

	render() {
		return (
			<>
				<Alert key="PricingSuccess" variant="success" className="position-fixed pricing-alert-success" id="IndexPricingSuccessAlert" onClose={this.hideAlert} dismissible>
					<i className="bi bi-check-circle display-inline-block pe-1" />
					The pricing message has been sent successfully. A copy has been sent to the e-mail address provided in the form (may be in spam).
				</Alert>
				<Alert key="PricingFailed" variant="danger" className="position-fixed pricing-alert-failed" id="IndexPricingFailedAlert" onClose={this.hideAlert} dismissible>
					<i className="bi bi-exclamation-triangle display-inline-block pe-1" />
					The pricing message has not been sent. Please try again later.
				</Alert>
				<section id="pricing" className="pt-3 mb-0 pb-0 pb-md-3">
					<Form id="PricingForm">
						<Container>
							<Row>
								<div className="index-pricing-header-wrapper">
									<h1>Pricing</h1>
								</div>
								<Col md={6} className="order-1 order-md-0">
									<div className="index-pricing-modules-container">
										<div className="index-pricing-modules-header">
											<h3>Additional modules</h3>
										</div>
										<div className="index-pricing-module">
											<div className="index-pricing-module-choose">
												<input className="index-pricing-module-checkbox" type="checkbox" id="IndexPricingModuleMailer" name="IndexPricingModuleMailer" onChange={(event) => this.expandModuleInfos(event)}/>
												<label className="index-pricing-module-label ms-3" htmlFor="IndexPricingModuleMailer">Mailer</label>
											</div>
											<div className="index-pricing-module-info mt-1 mb-1" id="IndexPricingModuleMailerInfo">
												<Container fluid className="p-0">
													<Row>
														<div className="index-pricing-module-info-question">
															<p className="index-pricing-module-info-question-p ms-1 pb-0 mb-0" id="IndexPricingModuleInfoQuestionMailer">What will the mailer be used for?</p>
														</div>
														<Col lg={6} className="mb-1">
															<ButtonGroup className="index-pricing-buttongroup-module" id="IndexPricingModuleMailerInfoButtongroup">
																<input type="checkbox" className="btn-check" id="IndexPricingModuleMailerInfoFormButton" autoComplete="off" name="IndexPricingModuleMailerInfoForm" value="form" onChange={(event) => this.changePricingForm(event)}/>
																<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingModuleMailerInfoFormButton" id="IndexPricingModuleMailerInfoFormLabel">Forms</label>
																<input type="checkbox" className="btn-check" id="IndexPricingModuleMailerInfoNewsButton" autoComplete="off" name="IndexPricingModuleMailerInfoNews" value="news"  onChange={(event) => this.changePricingForm(event)}/>
																<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingModuleMailerInfoNewsButton" id="IndexPricingModuleMailerInfoNewsLabel">Newsletter</label>
																<input type="checkbox" className="btn-check" id="IndexPricingModuleMailerInfoOtherButton" autoComplete="off" name="IndexPricingModuleMailerInfoOther" value="news"  onChange={(event) => this.changePricingForm(event)}/>
																<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingModuleMailerInfoOtherButton" id="IndexPricingModuleMailerInfoOtherLabel">Other</label>
															</ButtonGroup>
														</Col>
														<Col lg={6}>
															<Form.Control as="textarea" spellCheck="false" className="index-pricing-module-info-other index-pricing-module-info-other-deactivate" disabled placeholder="Other informations" name="IndexPricingModuleMailerInfoOtherTextarea"  id="IndexPricingModuleMailerInfoOtherTextarea" onChange={(event) => this.changePricingForm(event)}/>
														</Col>
													</Row>
												</Container>
											</div>
										</div>
										<div className="index-pricing-module">
											<div className="index-pricing-module-choose">
												<input className="index-pricing-module-checkbox" type="checkbox" id="IndexPricingModuleAccounts" name="IndexPricingModuleAccounts" onChange={(event) => this.expandModuleInfos(event)}/>
												<label className="index-pricing-module-label ms-3" htmlFor="IndexPricingModuleAccounts">Accounts</label>
											</div>
											<div className="index-pricing-module-info mt-1 mb-1" id="IndexPricingModuleAccountsInfo">
												<Container fluid className="p-0">
													<Row>
														<div className="index-pricing-module-info-question">
															<p className="index-pricing-module-info-question-p ms-1 pb-0 mb-0" id="IndexPricingModuleInfoQuestionAccounts">How many people will use the accounts module?</p>
														</div>
														<Col lg={6} className="mb-1">
															<ButtonGroup className="index-pricing-buttongroup-module" id="IndexPricingModuleMailerInfoButtongroup">
																<input type="radio" className="btn-check" id="IndexPricingModuleAccountsInfo100Button" autoComplete="off" name="IndexPricingModuleAccountsInfo" value="100"  onChange={(event) => this.changePricingForm(event)}/>
																<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingModuleAccountsInfo100Button" id="IndexPricingModuleAccountsInfo100Label">100</label>
																<input type="radio" className="btn-check" id="IndexPricingModuleAccountsInfo1000Button" autoComplete="off" name="IndexPricingModuleAccountsInfo" value="1000"  onChange={(event) => this.changePricingForm(event)}/>
																<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingModuleAccountsInfo1000Button" id="IndexPricingModuleAccountsInfo1000Label">1000</label>
																<input type="radio" className="btn-check" id="IndexPricingModuleAccountsInfoMoreButton" autoComplete="off" name="IndexPricingModuleAccountsInfo" value="more"  onChange={(event) => this.changePricingForm(event)}/>
																<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingModuleAccountsInfoMoreButton" id="IndexPricingModuleAccountsInfoMoreLabel">More</label>
															</ButtonGroup>
														</Col>
														<Col lg={6}>
															<Form.Control as="textarea" spellCheck="false" className="index-pricing-module-info-other" placeholder="Other informations" name="IndexPricingModuleAccountsInfoOtherTextarea"  id="IndexPricingModuleAccountsInfoOtherTextarea"  onChange={(event) => this.changePricingForm(event)}/>
														</Col>
													</Row>
												</Container>
											</div>
										</div>
										<div className="index-pricing-module">
											<div className="index-pricing-module-choose mb-2">
												<input className="index-pricing-module-checkbox" type="checkbox" id="IndexPricingModuleDiscord" name="IndexPricingModuleDiscord" onChange={(event) => this.expandModuleInfos(event)}/>
												<label className="index-pricing-module-label ms-3" htmlFor="IndexPricingModuleDiscord">Discord widget</label>
											</div>
										</div>
										<div className="index-pricing-module">
											<div className="index-pricing-module-choose">
												<input className="index-pricing-module-checkbox" type="checkbox" id="IndexPricingModuleTs" name="IndexPricingModuleTs" onChange={(event) => this.expandModuleInfos(event)}/>
												<label className="index-pricing-module-label ms-3" htmlFor="IndexPricingModuleTs">TeamSpeak</label>
											</div>
											<div className="index-pricing-module-info mt-1 mb-1" id="IndexPricingModuleTsInfo">
												<Container fluid className="p-0">
													<Row>
														<div className="index-pricing-module-info-question">
															<p className="index-pricing-module-info-question-p ms-1 pb-0 mb-0" id="IndexPricingModuleInfoQuestionTeamspeak">What do you prefer?</p>
														</div>
														<Col lg={12} className="mb-1">
															<ButtonGroup className="index-pricing-buttongroup-module" id="IndexPricingModuleTsInfoButtongroup">
																<input type="checkbox" className="btn-check" id="IndexPricingModuleTsInfoLinkButton" autoComplete="off" name="IndexPricingModuleTsInfoLink" value="link"  onChange={(event) => this.changePricingForm(event)}/>
																<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingModuleTsInfoLinkButton" id="IndexPricingModuleTsInfoLabel"><i className="index-pricing-invisible-i">ii</i>Link<i className="index-pricing-invisible-i">ii</i></label>
																<input type="checkbox" className="btn-check" id="IndexPricingModuleTsInfoManagerButton" autoComplete="off" name="IndexPricingModuleTsInfoManager" value="manager"  onChange={(event) => this.changePricingForm(event)}/>
																<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingModuleTsInfoManagerButton" id="IndexPricingModuleTsInfoManagerLabel">Manager</label>
															</ButtonGroup>
														</Col>
													</Row>
												</Container>
											</div>
										</div>
										<div className="index-pricing-module">
											<div className="index-pricing-module-choose">
												<input className="index-pricing-module-checkbox" type="checkbox" id="IndexPricingModule3d" name="IndexPricingModule3d" onChange={(event) => this.expandModuleInfos(event)}/>
												<label className="index-pricing-module-label ms-3" htmlFor="IndexPricingModule3d">3D models</label>
											</div>
											<div className="index-pricing-module-info mt-1 mb-1" id="IndexPricingModule3dInfo">
												<Container fluid className="p-0">
													<Row>
														<div className="index-pricing-module-info-question">
															<p className="index-pricing-module-info-question-p ms-1 pb-0 mb-0" id="IndexPricingModuleInfoQuestionModels">Do you have your own 3D models?</p>
														</div>
														<Col lg={12} className="mb-1">
															<ButtonGroup className="index-pricing-buttongroup-module" id="IndexPricingModule3dInfoButtongroup">
																<input type="radio" className="btn-check" id="IndexPricingModule3dInfoNoButton" autoComplete="off" name="IndexPricingModuleTdInfo" value="no" onChange={(event) => this.changePricingForm(event)}/>
																<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingModule3dInfoNoButton" id="IndexPricingModule3dInfoNoLabel">No</label>
																<input type="radio" className="btn-check" id="IndexPricingModule3dInfoYesButton" autoComplete="off" name="IndexPricingModuleTdInfo" value="yes" onChange={(event) => this.changePricingForm(event)}/>
																<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingModule3dInfoYesButton" id="IndexPricingModule3dInfoYesLabel">Yes</label>
															</ButtonGroup>
														</Col>
													</Row>
												</Container>
											</div>
										</div>
										<div className="index-pricing-module">
											<div className="index-pricing-module-choose mb-2">
												<input className="index-pricing-module-checkbox" type="checkbox" id="IndexPricingModuleAutopricing" name="IndexPricingModuleAutopricing" onChange={(event) => this.expandModuleInfos(event)}/>
												<label className="index-pricing-module-label ms-3" htmlFor="IndexPricingModuleAutopricing">Auto pricing</label>
											</div>
										</div>
										<div className="index-pricing-module">
											<div className="index-pricing-module-choose">
												<input className="index-pricing-module-checkbox" type="checkbox" id="IndexPricingModuleConfigurator" name="IndexPricingModuleConfigurator" onChange={(event) => this.expandModuleInfos(event)}/>
												<label className="index-pricing-module-label ms-3" htmlFor="IndexPricingModuleConfigurator">Configurator</label>
											</div>
											<div className="index-pricing-module-info mt-1 mb-1" id="IndexPricingModuleConfiguratorInfo">
												<Container fluid className="p-0">
													<Row>
														<Col lg={12}>
															<Form.Control as="textarea" spellCheck="false" className="index-pricing-module-info-other" placeholder="What is the configurator about?" name="IndexPricingModuleConfiguratorInfoOtherTextarea"  id="IndexPricingModuleConfiguratorInfoOtherTextarea" onChange={(event) => this.changePricingForm(event)}/>
														</Col>
													</Row>
												</Container>
											</div>
										</div>
										<div className="index-pricing-module">
											<div className="index-pricing-module-choose">
												<input className="index-pricing-module-checkbox" type="checkbox" id="IndexPricingModuleMinecraft" name="IndexPricingModuleMinecraft" onChange={(event) => this.expandModuleInfos(event)}/>
												<label className="index-pricing-module-label ms-3" htmlFor="IndexPricingModuleMinecraft">Minecraft</label>
											</div>
											<div className="index-pricing-module-info mt-1 mb-1" id="IndexPricingModuleMinecraftInfo">
												<Container fluid className="p-0">
													<Row>
														<div className="index-pricing-module-info-question">
															<p className="index-pricing-module-info-question-p ms-1 pb-0 mb-0" id="IndexPricingModuleInfoQuestionMinecraft">What do you want?</p>
														</div>
														<Col lg={6} className="mb-1">
															<ButtonGroup className="index-pricing-buttongroup-module font-size" id="IndexPricingModuleMinecraftInfoButtongroup">
																<input type="checkbox" className="btn-check" id="IndexPricingModuleMinecraftInfoItemshopButton" autoComplete="off" name="IndexPricingModuleMinecraftInfoItemshop" value="itemshop" onChange={(event) => this.changePricingForm(event)}/>
																<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingModuleMinecraftInfoItemshopButton" id="IndexPricingModuleMinecraftInfoItemshopLabel">Itemshop</label>
																<input type="checkbox" className="btn-check" id="IndexPricingModuleMinecraftInfoBansButton" autoComplete="off" name="IndexPricingModuleMinecraftInfoBans" value="bans" onChange={(event) => this.changePricingForm(event)}/>
																<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingModuleMinecraftInfoBansButton" id="IndexPricingModuleMinecraftInfoBansLabel">Punishments</label>
																<input type="checkbox" className="btn-check" id="IndexPricingModuleMinecraftInfoOtherButton" autoComplete="off" name="IndexPricingModuleMinecraftInfoOther" value="other" onChange={(event) => this.changePricingForm(event)}/>
																<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingModuleMinecraftInfoOtherButton" id="IndexPricingModuleMinecraftInfoOtherLabel">Other</label>
															</ButtonGroup>
														</Col>
														<Col lg={6}>
															<Form.Control as="textarea" spellCheck="false" disabled className="index-pricing-module-info-other index-pricing-module-info-other-deactivate" placeholder="Other informations" name="IndexPricingModuleMinecraftInfoOtherTextarea"  id="IndexPricingModuleMinecraftInfoOtherTextarea" onChange={(event) => this.changePricingForm(event)}/>
														</Col>
													</Row>
												</Container>
											</div>
										</div>
										<div className="index-pricing-module">
											<div className="index-pricing-module-choose">
												<input className="index-pricing-module-checkbox" type="checkbox" id="IndexPricingModuleAdminpanel" name="IndexPricingModuleAdminpanel" onChange={(event) => this.expandModuleInfos(event)}/>
												<label className="index-pricing-module-label ms-3" htmlFor="IndexPricingModuleAdminpanel">Admin panel</label>
											</div>
											<div className="index-pricing-module-info mt-1 mb-1" id="IndexPricingModuleAdminpanelInfo">
												<Container fluid className="p-0">
													<Row>
														<Col lg={12}>
															<Form.Control as="textarea" spellCheck="false" className="index-pricing-module-info-other" placeholder="What is the admin panel about?" name="IndexPricingModuleAdminpanelInfoOtherTextarea"  id="IndexPricingModuleAdminpanelInfoOtherTextarea" onChange={(event) => this.changePricingForm(event)}/>
														</Col>
													</Row>
												</Container>
											</div>
										</div>
									</div>
									<div className="IndexPricingOtherTextareaContainer">
										<Form.Control as="textarea" spellCheck="false" className="index-pricing-other" placeholder="Additionally, I would like... (optional)" name="IndexPricingModuleOtherTextarea"  id="IndexPricingModuleOtherTextarea" onChange={(event) => this.changePricingForm(event)}/>
									</div>
									<div className="index-pricing-other-textarea-container">
										<span>
											<i>Before selecting modules, read about them <a className="index-pricing-modules-disclaimer-a" href="/#modules">here.</a></i>
										</span>
									</div>
									<Form.Group className="mb-3 d-block d-md-none">
										<div className="index-pricing-submit-wrapper">
											<ButtonGroup className="index-pricing-buttongroup">
												<button type="button" className="btn btn-ec-cyan pricing-submit-btn" id="IndexPricingSubmitButtonSmall" onClick={this.validatePricingForm}>
													<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" id="IndexPricingSubmitLoaderSmall" style={{display: "none"}}/>
													<p className="index-pricing-submit-btn-p" id="IndexPricingSubmitTextSmall">Submit</p>
												</button>
											</ButtonGroup>
										</div>
									</Form.Group>
								</Col>
								<Col md={6} className="order-0 order-md-1">
									<Form.Group className="mb-3">
										<Form.Label>First name</Form.Label>
										<Form.Control type="text" placeholder="John" name="IndexPricingFirstname" id="IndexPricingFirstname" spellCheck="false" onChange={(event) => this.changePricingForm(event)}/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Second name</Form.Label>
										<Form.Control type="text" placeholder="Smith"  name="IndexPricingLastname" id="IndexPricingLastname" spellCheck="false" onChange={(event) => this.changePricingForm(event)}/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Company (optional)</Form.Label>
										<Form.Control type="text" placeholder="Company"  name="IndexPricingCompany" id="IndexPricingCompany" spellCheck="false" onChange={(event) => this.changePricingForm(event)}/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>E-mail address</Form.Label>
										<Form.Control type="text" placeholder="john.smith@email.com"  name="IndexPricingEmail" id="IndexPricingEmail" spellCheck="false" onChange={(event) => this.changePricingForm(event)}/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Phone number</Form.Label>
										<Form.Control type="text" placeholder="+01 123 456 789"  name="IndexPricingPhone" id="IndexPricingPhone" spellCheck="false" onChange={(event) => this.changePricingForm(event)}/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Country</Form.Label>
										<Form.Control type="text" placeholder="United States"  name="IndexPricingCountry" id="IndexPricingCountry" spellCheck="false" onChange={(event) => this.changePricingForm(event)}/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Preferred method of contact</Form.Label>
										<div className="index-contact-buttons-wrapper">
											<ButtonGroup className="index-pricing-buttongroup" id="IndexPricingPreferredContact">
												<input type="radio" className="btn-check" id="IndexPricingPreferredContactEmail" autoComplete="off" name="IndexPricingPreferredContact" value="email"  onChange={(event) => this.changePricingForm(event)}/>
												<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingPreferredContactEmail" id="IndexPricingPreferredContactEmailLabel">E-mail</label>
												<input type="radio" className="btn-check" id="IndexPricingPreferredContactPhone" autoComplete="off" name="IndexPricingPreferredContact" value="phone"  onChange={(event) => this.changePricingForm(event)}/>
												<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingPreferredContactPhone" id="IndexPricingPreferredContactPhoneLabel">Phone</label>
											</ButtonGroup>
										</div>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Preferred contact language</Form.Label>
										<div className="index-pricing-buttons-wrapper">
											<ButtonGroup className="index-pricing-buttongroup" id="IndexPricingPreferredLanguage">
												<input type="radio" className="btn-check" id="IndexPricingPreferredLanguageEnglish" autoComplete="off" name="IndexPricingPreferredLanguage" value="english" onChange={(event) => this.changePricingForm(event)}/>
												<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingPreferredLanguageEnglish" id="IndexPricingPreferredLanguageEnglishLabel">English</label>
												<input type="radio" className="btn-check" id="IndexPricingPreferredLanguagePolish" autoComplete="off" name="IndexPricingPreferredLanguage" value="polish"  onChange={(event) => this.changePricingForm(event)}/>
												<label className="btn btn-outline-ec-cyan" htmlFor="IndexPricingPreferredLanguagePolish" id="IndexPricingPreferredLanguagePolishLabel"><i className="index-pricing-invisible-i">i</i>Polish<i className="index-pricing-invisible-i">i</i></label>
											</ButtonGroup>
										</div>
									</Form.Group>
									<Form.Group className="mb-3 d-none d-md-block">
										<div className="index-pricing-submit-wrapper">
											<ButtonGroup className="index-pricing-buttongroup">
												<button type="button" className="btn btn-ec-cyan pricing-submit-btn" id="IndexPricingSubmitButtonMedium" onClick={this.validatePricingForm}>
													<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" id="IndexPricingSubmitLoaderMedium" style={{display: "none"}}/>
													<p className="index-pricing-submit-btn-p" id="IndexPricingSubmitTextMedium">Submit</p>
												</button>
											</ButtonGroup>
										</div>
									</Form.Group>
								</Col>
							</Row>
							<Form.Group className="pb-3">
								<div className="index-pricing-terms">
									<input className="index-pricing-terms-checkbox" type="checkbox" id="IndexPricingTerms" name="IndexPricingTerms" onChange={(event) => this.changePricingForm(event)}/>
									<label className="index-pricing-terms-label ms-3" htmlFor="IndexPricingTerms" id="IndexPricingTermsLabel">
										I agree with <a href="/legals/terms" className="index-pricing-terms-a">terms of service</a> and <a href="/legals/privacy" className="index-pricing-terms-a">privacy policy</a>.
									</label>
								</div>
							</Form.Group>
							<Form.Group className="mb-3">
								<div className="index-pricing-errors">
									<p className="index-pricing-error" id="IndexPricingErrorSent" style={{display: "none"}}>You must wait 5 seconds before submitting the form again.</p>
									<p className="index-pricing-error" id="IndexPricingErrorMailerInputNot" style={{display: "none"}}>You need to specify other uses for mailer module.</p>
									<p className="index-pricing-error" id="IndexPricingErrorMailerNot" style={{display: "none"}}>You must select the use for the mailer.</p>
									<p className="index-pricing-error" id="IndexPricingErrorAccountsPeoples" style={{display: "none"}}>You have to specify how many maximum uses of the accounts module will be.</p>
									<p className="index-pricing-error" id="IndexPricingErrorAccountsText" style={{display: "none"}}>You need to specify what the account module should be used for.</p>
									<p className="index-pricing-error" id="IndexPricingErrorTeamspeakChoose" style={{display: "none"}}>You have to choose whether you want for TeamSpeak.</p>
									<p className="index-pricing-error" id="IndexPricingErrorModelsOwn" style={{display: "none"}}>You must specify whether you have your own models for the 3D module.</p>
									<p className="index-pricing-error" id="IndexPricingErrorConfiguratorInput" style={{display: "none"}}>You need to specify what the configurator should rely on.</p>
									<p className="index-pricing-error" id="IndexPricingErrorMinecraftInputNot" style={{display: "none"}}>You need to specify other uses for minecraft module.</p>
									<p className="index-pricing-error" id="IndexPricingErrorMinecraftNot" style={{display: "none"}}>You must select the use for the minecraft module.</p>
									<p className="index-pricing-error" id="IndexPricingErrorAdminpanelNot" style={{display: "none"}}>You need to specify what the admin panel should rely on.</p>
									<p className="index-pricing-error" id="IndexPricingErrorFirstnameNot" style={{display: "none"}}>The "First name" field must be filled.</p>
									<p className="index-pricing-error" id="IndexPricingErrorFirstnameNumbers" style={{display: "none"}}>The "First name" field can't contain numbers.</p>
									<p className="index-pricing-error" id="IndexPricingErrorFirstnameLetters" style={{display: "none"}}>The "First name" field must be at least 3 letters long.</p>
									<p className="index-pricing-error" id="IndexPricingErrorLastnameNot" style={{display: "none"}}>The "Second name" field must be filled.</p>
									<p className="index-pricing-error" id="IndexPricingErrorLastnameNumbers" style={{display: "none"}}>The "Second name" field can't contain numbers.</p>
									<p className="index-pricing-error" id="IndexPricingErrorLastnameLetters" style={{display: "none"}}>The "Second name" field must be at least 3 letters long.</p>
									<p className="index-pricing-error" id="IndexPricingErrorEmailNot" style={{display: "none"}}>The "E-mail address" field must be filled.</p>
									<p className="index-pricing-error" id="IndexPricingErrorEmailIncorrect" style={{display: "none"}}>Provided E-mail address isn't correct.</p>
									<p className="index-pricing-error" id="IndexPricingErrorPhoneNot" style={{display: "none"}}>The "Phone number" field must be filled.</p>
									<p className="index-pricing-error" id="IndexPricingErrorPhoneIncorrect" style={{display: "none"}}>The "Phone number" field can't contain letters and special signs.</p>
									<p className="index-pricing-error" id="IndexPricingErrorCountryNot" style={{display: "none"}}>The "Country" field must be filled.</p>
									<p className="index-pricing-error" id="IndexPricingErrorCountryNumbers" style={{display: "none"}}>The "Country" field can't contain numbers.</p>
									<p className="index-pricing-error" id="IndexPricingErrorPreferredcontactNot" style={{display: "none"}}>The "Preferred method of contact" must be choosen.</p>
									<p className="index-pricing-error" id="IndexPricingErrorPreferredcontactBroken" style={{display: "none"}}>The "Preferred method of contact" are broken. Try again later...</p>
									<p className="index-pricing-error" id="IndexPricingErrorPreferredlanguageNot" style={{display: "none"}}>The "Preferred contact language" must be choosen.</p>
									<p className="index-pricing-error" id="IndexPricingErrorPreferredlanguageBroken" style={{display: "none"}}>The "Preferred contact language" are broken. Try again later...</p>
									<p className="index-pricing-error" id="IndexPricingErrorTerms" style={{display: "none"}}>Please accept terms of service and privacy policy</p>
								</div>
							</Form.Group>
						</Container>
					</Form>
				</section>
			</>
		);
	}
}

export default Pricing;