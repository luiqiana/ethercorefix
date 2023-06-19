import {IndexPricingInputs} from '../Pricing';

import ContainLetters from '../../../functions/ContainLetters';
import ContainNumbers from '../../../functions/ContainNumbers';
import ValidateEmail from '../../../functions/ValidateEmail';

class PricingValidation {
	static validatePricingForm() {
		const Mailer = IndexPricingInputs.Mailer;
		const MailerInfo = {
			Forms: IndexPricingInputs.MailerInfo.Form,
			News: IndexPricingInputs.MailerInfo.News,
			Other: IndexPricingInputs.MailerInfo.Other,
			OtherInput: IndexPricingInputs.MailerInfo.OtherInput
		};
		const Accounts = IndexPricingInputs.Accounts;
		const AccountsInfo = {
			Peoples: IndexPricingInputs.AccountsInfo.Peoples,
			OtherInput: IndexPricingInputs.AccountsInfo.OtherInput
		};
		const Teamspeak = IndexPricingInputs.Teamspeak;
		const TeamspeakInfo = {
			Link: IndexPricingInputs.TeamspeakInfo.Link,
			Manager: IndexPricingInputs.TeamspeakInfo.Manager
		};
		const Models = IndexPricingInputs.Models;
		const ModelsInfo = {
			OwnModels: IndexPricingInputs.ModelsInfo.OwnModels
		};
		const Configurator = IndexPricingInputs.Configurator;
		const ConfiguratorInfo = {
			OtherInput: IndexPricingInputs.ConfiguratorInfo.OtherInput
		};
		const Minecraft = IndexPricingInputs.Minecraft;
		const MinecraftInfo = {
			Itemshop: IndexPricingInputs.MinecraftInfo.Itemshop,
			Bans: IndexPricingInputs.MinecraftInfo.Bans,
			Other: IndexPricingInputs.MinecraftInfo.Other,
			OtherInput: IndexPricingInputs.MinecraftInfo.OtherInput
		};
		const Adminpanel = IndexPricingInputs.Adminpanel;
		const AdminpanelInfo = {
			OtherInput: IndexPricingInputs.AdminpanelInfo.OtherInput
		}

		const Firstname = IndexPricingInputs.Firstname;
		const Lastname = IndexPricingInputs.Lastname;
		const Email = IndexPricingInputs.Email;
		const Phone = IndexPricingInputs.Phone;
		const Country = IndexPricingInputs.Country;
		const Preferredcontact = IndexPricingInputs.Preferredcontact;
		const Preferredlanguage = IndexPricingInputs.Preferredlanguage;
		const Terms = IndexPricingInputs.Terms;
		const Sent = IndexPricingInputs.Sent;

		const QuestionMailer = document.getElementById("IndexPricingModuleInfoQuestionMailer");
		const QuestionAccounts = document.getElementById("IndexPricingModuleInfoQuestionAccounts");
		const QuestionTeamspeak = document.getElementById("IndexPricingModuleInfoQuestionTeamspeak");
		const QuestionModels = document.getElementById("IndexPricingModuleInfoQuestionModels");
		const QuestionMinecraft = document.getElementById("IndexPricingModuleInfoQuestionMinecraft");

		const MailerText = document.getElementById("IndexPricingModuleMailerInfoOtherTextarea");
		const AccountsText = document.getElementById("IndexPricingModuleAccountsInfoOtherTextarea");
		const ConfiguratorText = document.getElementById("IndexPricingModuleConfiguratorInfoOtherTextarea");
		const MinecraftText = document.getElementById("IndexPricingModuleMinecraftInfoOtherTextarea");
		const AdminpanelText = document.getElementById("IndexPricingModuleAdminpanelInfoOtherTextarea");

		const FirstnameElement = document.getElementById("IndexPricingFirstname");
		const LastnameElement = document.getElementById("IndexPricingLastname");
		const EmailElement = document.getElementById("IndexPricingEmail");
		const PhoneElement = document.getElementById("IndexPricingPhone");
		const CountryElement = document.getElementById("IndexPricingCountry");
		const PreferredcontactemailElement = document.getElementById("IndexPricingPreferredContactEmailLabel");
		const PreferredcontactphoneElement = document.getElementById("IndexPricingPreferredContactPhoneLabel");
		const PreferredlanguageenglishElement = document.getElementById("IndexPricingPreferredLanguageEnglishLabel");
		const PreferredlanguagepolishElement = document.getElementById("IndexPricingPreferredLanguagePolishLabel");
		const TermsElement = document.getElementById("IndexPricingTermsLabel");

		const AlreadySent = document.getElementById("IndexPricingErrorSent");
		const MailerInputNot = document.getElementById("IndexPricingErrorMailerInputNot");
		const MailerNot = document.getElementById("IndexPricingErrorMailerNot");
		const AccountsPeoples = document.getElementById("IndexPricingErrorAccountsPeoples");
		const AccountsNot = document.getElementById("IndexPricingErrorAccountsText");
		const TeamspeakChoose = document.getElementById("IndexPricingErrorTeamspeakChoose");
		const ModelsOwn = document.getElementById("IndexPricingErrorModelsOwn");
		const ConfiguratorInput = document.getElementById("IndexPricingErrorConfiguratorInput");
		const MinecraftInputNot = document.getElementById("IndexPricingErrorMinecraftInputNot");
		const MinecraftNot = document.getElementById("IndexPricingErrorMinecraftNot");
		const AdminpanelNot = document.getElementById("IndexPricingErrorAdminpanelNot");
		const FirstnameNot = document.getElementById("IndexPricingErrorFirstnameNot");
		const FirstnameNumbers = document.getElementById("IndexPricingErrorFirstnameNumbers");
		const FirstnameLetters = document.getElementById("IndexPricingErrorFirstnameLetters");
		const LastnameNot = document.getElementById("IndexPricingErrorLastnameNot");
		const LastnameNumbers = document.getElementById("IndexPricingErrorLastnameNumbers");
		const LastnameLetters = document.getElementById("IndexPricingErrorLastnameLetters");
		const EmailNot = document.getElementById("IndexPricingErrorEmailNot");
		const EmailIncorrect = document.getElementById("IndexPricingErrorEmailIncorrect");
		const PhoneNot = document.getElementById("IndexPricingErrorPhoneNot");
		const PhoneIncorrect = document.getElementById("IndexPricingErrorPhoneIncorrect");
		const CountryNot = document.getElementById("IndexPricingErrorCountryNot");
		const CountryNumbers = document.getElementById("IndexPricingErrorCountryNumbers");
		const PreferredcontactNot = document.getElementById("IndexPricingErrorPreferredcontactNot");
		const PreferredcontactBroken = document.getElementById("IndexPricingErrorPreferredcontactBroken");
		const PreferredlanguageNot = document.getElementById("IndexPricingErrorPreferredlanguageNot");
		const PreferredlanguageBroken = document.getElementById("IndexPricingErrorPreferredlanguageBroken");
		const TermsNot = document.getElementById("IndexPricingErrorTerms");

		MailerInputNot.style.display = "none";
		MailerNot.style.display = "none";
		AccountsPeoples.style.display = "none";
		AccountsNot.style.display = "none";
		TeamspeakChoose.style.display = "none";
		ModelsOwn.style.display = "none";
		ConfiguratorInput.style.display = "none";
		MinecraftInputNot.style.display = "none";
		MinecraftNot.style.display = "none";
		AdminpanelNot.style.display = "none";
		FirstnameNot.style.display = "none";
		FirstnameNumbers.style.display = "none";
		FirstnameLetters.style.display = "none";
		LastnameNot.style.display = "none";
		LastnameNumbers.style.display = "none";
		LastnameLetters.style.display = "none";
		EmailNot.style.display = "none";
		EmailIncorrect.style.display = "none";
		PhoneNot.style.display = "none";
		PhoneIncorrect.style.display = "none";
		CountryNot.style.display = "none";
		CountryNumbers.style.display = "none";
		PreferredcontactNot.style.display = "none";
		PreferredcontactBroken.style.display = "none";
		PreferredlanguageNot.style.display = "none";
		PreferredlanguageBroken.style.display = "none";
		TermsNot.style.display = "none";

		let Errors = [];

		QuestionMailer.style.color = "#000000";
		QuestionAccounts.style.color = "#000000";
		QuestionTeamspeak.style.color = "#000000";
		QuestionModels.style.color = "#000000";
		QuestionMinecraft.style.color = "#000000";

		MailerText.classList.remove("index-pricing-error-input");
		AccountsText.classList.remove("index-pricing-error-input");
		ConfiguratorText.classList.remove("index-pricing-error-input");
		MinecraftText.classList.remove("index-pricing-error-input");
		AdminpanelText.classList.remove("index-pricing-error-input");

		FirstnameElement.classList.remove("index-pricing-error-input");
		LastnameElement.classList.remove("index-pricing-error-input");
		EmailElement.classList.remove("index-pricing-error-input");
		PhoneElement.classList.remove("index-pricing-error-input");
		CountryElement.classList.remove("index-pricing-error-input");
		PreferredcontactemailElement.classList.remove("index-pricing-error-radio");
		PreferredcontactphoneElement.classList.remove("index-pricing-error-radio");
		PreferredlanguageenglishElement.classList.remove("index-pricing-error-radio");
		PreferredlanguagepolishElement.classList.remove("index-pricing-error-radio");
		TermsElement.classList.remove("index-pricing-error-terms");

		if(Sent) {
			Errors.push("Sent");
		}

//		Mailer
		if(Mailer) {
			if(MailerInfo.Forms || MailerInfo.News || MailerInfo.Other) {
				if(MailerInfo.Other) {
					if(MailerInfo.OtherInput === '') {
						Errors.push("MailerInputNot");
						MailerText.classList.add("index-pricing-error-input");
						QuestionMailer.style.color = "#ff0000";
					}
				}
			}
			else {
				Errors.push("MailerNot");
				QuestionMailer.style.color = "#ff0000";
			}
		}

//      Accounts
		if(Accounts) {
			if(AccountsInfo.Peoples === '') {
				Errors.push("AccountsPeoples");
				QuestionAccounts.style.color = "#ff0000";
			}

			if(AccountsInfo.OtherInput === '') {
				Errors.push("AccountsNot");
				AccountsText.classList.add("index-pricing-error-input");
				QuestionAccounts.style.color = "#ff0000";
			}
		}

//      TeamSpeak3
		if(Teamspeak) {
			if(!TeamspeakInfo.Link && !TeamspeakInfo.Manager) {
				Errors.push("TeamspeakChoose");
				QuestionTeamspeak.style.color = "#ff0000";
			}
		}

//      3D models
		if(Models) {
			if(ModelsInfo.OwnModels === '') {
				Errors.push("ModelsOwn");
				QuestionModels.style.color = "#ff0000";
			}
		}

//      Configurator
		if(Configurator) {
			if(ConfiguratorInfo.OtherInput === '') {
				Errors.push("ConfiguratorInput");
				ConfiguratorText.classList.add("index-pricing-error-input");
			}
		}

//      Minecraft
		if(Minecraft) {
			if(MinecraftInfo.Itemshop || MinecraftInfo.Bans || MinecraftInfo.Other) {
				if(MinecraftInfo.Other) {
					if(MinecraftInfo.OtherInput === '') {
						Errors.push("MinecraftInputNot")
						QuestionMinecraft.style.color = "#ff0000";
						MinecraftText.classList.add("index-pricing-error-input");
					}
				}
			}
			else {
				Errors.push("MinecraftNot")
				QuestionMinecraft.style.color = "#ff0000";
			}
		}

//      Admin panel
		if(Adminpanel) {
			if(AdminpanelInfo.OtherInput === '') {
				Errors.push("AdminpanelNot");
				AdminpanelText.classList.add("index-pricing-error-input");
			}
		}

//		First name
		if(Firstname !== '') {
			if(Firstname.length < 3) {
				Errors.push("FirstnameLetters");
				FirstnameElement.classList.add("index-pricing-error-input");
			}

			if(ContainNumbers(Firstname)) {
				Errors.push("FirstnameNumbers");
				FirstnameElement.classList.add("index-pricing-error-input");
			}
		}
		else {
			Errors.push("FirstnameNot");
			FirstnameElement.classList.add("index-pricing-error-input");
		}

//		Second name
		if(Lastname !== '') {
			if(Lastname.length < 3) {
				Errors.push("LastnameLetters");
				LastnameElement.classList.add("index-pricing-error-input");
			}

			if(ContainNumbers(Lastname)) {
				Errors.push("LastnameNumbers");
				LastnameElement.classList.add("index-pricing-error-input");
			}
		}
		else {
			Errors.push("LastnameNot");
			LastnameElement.classList.add("index-pricing-error-input");
		}

//		Email
		if(Email !== '') {
			if(ValidateEmail(Email)) {
				Errors.push("EmailIncorrect");
				EmailElement.classList.add("index-pricing-error-input");
			}
		}
		else {
			Errors.push("EmailNot");
			EmailElement.classList.add("index-pricing-error-input");
		}

//		Phone
		if(Phone !== '') {
			if(ContainLetters(Phone)) {
				Errors.push("PhoneIncorrect");
				PhoneElement.classList.add("index-pricing-error-input");
			}
		}
		else {
			Errors.push("PhoneNot");
			PhoneElement.classList.add("index-pricing-error-input");
		}

//		Country
		if(Country !== '') {
			if(ContainNumbers(Country)) {
				Errors.push("CountryNumbers");
				CountryElement.classList.add("index-pricing-error-input");
			}
		}
		else {
			Errors.push("CountryNot");
			CountryElement.classList.add("index-pricing-error-input");
		}

//		Preferred method of contact
		if(Preferredcontact !== '') {
			if(Preferredcontact !== "email" && Preferredcontact !== "phone") {
				Errors.push("PreferredcontactBroken");
				PreferredcontactemailElement.classList.add("index-pricing-error-radio");
				PreferredcontactphoneElement.classList.add("index-pricing-error-radio");
			}
		}
		else {
			Errors.push("PreferredcontactNot");
			PreferredcontactemailElement.classList.add("index-pricing-error-radio");
			PreferredcontactphoneElement.classList.add("index-pricing-error-radio");
		}

//		Preferred contact language
		if(Preferredlanguage !== '') {
			if(Preferredlanguage !== "english" && Preferredlanguage !== "polish") {
				Errors.push("PreferredlanguageBroken");
				PreferredlanguageenglishElement.classList.add("index-pricing-error-radio");
				PreferredlanguageenglishElement.classList.add("index-pricing-error-radio");
			}
		}
		else {
			Errors.push("PreferredlanguageNot");
			PreferredlanguageenglishElement.classList.add("index-pricing-error-radio");
			PreferredlanguagepolishElement.classList.add("index-pricing-error-radio");
		}

//	    Terms
		if(!Terms) {
			Errors.push("TermsNot");
			TermsElement.classList.add("index-pricing-error-terms");
		}

//      Submit or show errors
		if(Errors.length === 0 || Errors.includes("Sent")) {
			if(Errors.includes("Sent")) {
				AlreadySent.style.display = "block";
				return false;
			}
			else {
				return true;
			}
		}
		else {
			for(let i = 0; i < Errors.length; i++) {
				// eslint-disable-next-line
				(eval(Errors[i])).style.display = "block";
			}
			return false;
		}
	}
}

export default PricingValidation;