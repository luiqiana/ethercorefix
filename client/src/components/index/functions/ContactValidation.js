import { IndexContactInputs } from "../Contact";

import ContainNumbers from "../../../functions/ContainNumbers";
import ValidateEmail from "../../../functions/ValidateEmail";
import ContainLetters from "../../../functions/ContainLetters";

class ContactValidation {
	static validateContactForm() {
		const Sent = IndexContactInputs.Sent;
	 	const Firstname = IndexContactInputs.Firstname;
	 	const Lastname = IndexContactInputs.Lastname;
	 	const Email = IndexContactInputs.Email;
	 	const Phone = IndexContactInputs.Phone;
	 	const Country = IndexContactInputs.Country;
	 	const Preferredcontact = IndexContactInputs.Preferredcontact;
	 	const Preferredlanguage = IndexContactInputs.Preferredlanguage;
	 	const Terms = IndexContactInputs.Terms;
	 	const Message = IndexContactInputs.Message;

	 	const FirstnameElement = document.getElementById("IndexContactFirstname");
	 	const LastnameElement = document.getElementById("IndexContactLastname");
	 	const EmailElement = document.getElementById("IndexContactEmail");
	 	const PhoneElement = document.getElementById("IndexContactPhone");
	 	const CountryElement = document.getElementById("IndexContactCountry");
	 	const PreferredcontactemailElement = document.getElementById("IndexContactPreferredContactEmailLabel");
		const PreferredcontactphoneElement = document.getElementById("IndexContactPreferredContactPhoneLabel");
	 	const PreferredlanguageenglishElement = document.getElementById("IndexContactPreferredLanguageEnglishLabel");
		const PreferredlanguagepolishElement = document.getElementById("IndexContactPreferredLanguagePolishLabel");
	 	const TermsElement = document.getElementById("IndexContactTermsLabel");
	 	const MessageElement = document.getElementById("IndexContactMessage");

		const AlreadySent = document.getElementById("IndexContactErrorSent");
		const FirstnameNot = document.getElementById("IndexContactErrorFirstnameNot");
		const FirstnameNumbers = document.getElementById("IndexContactErrorFirstnameNumbers");
		const FirstnameLetters = document.getElementById("IndexContactErrorFirstnameLetters");
		const LastnameNot = document.getElementById("IndexContactErrorLastnameNot");
		const LastnameNumbers = document.getElementById("IndexContactErrorLastnameNumbers");
		const LastnameLetters = document.getElementById("IndexContactErrorLastnameLetters");
		const EmailNot = document.getElementById("IndexContactErrorEmailNot");
		const EmailIncorrect = document.getElementById("IndexContactErrorEmailIncorrect");
		const PhoneNot = document.getElementById("IndexContactErrorPhoneNot");
		const PhoneIncorrect = document.getElementById("IndexContactErrorPhoneIncorrect");
		const CountryNot = document.getElementById("IndexContactErrorCountryNot");
		const CountryNumbers = document.getElementById("IndexContactErrorCountryNumbers");
		const PreferredcontactNot = document.getElementById("IndexContactErrorPreferredcontactNot");
		const PreferredcontactBroken = document.getElementById("IndexContactErrorPreferredcontactBroken");
		const PreferredlanguageNot = document.getElementById("IndexContactErrorPreferredlanguageNot");
		const PreferredlanguageBroken = document.getElementById("IndexContactErrorPreferredlanguageBroken");
		const MessageNot = document.getElementById("IndexContactErrorMessageNot");
		const MessageLetters = document.getElementById("IndexContactErrorMessageLetters");
		const TermsNot = document.getElementById("IndexContactErrorTerms");

		let Errors = [];

		FirstnameElement.classList.remove("index-contact-error-input");
		LastnameElement.classList.remove("index-contact-error-input");
		EmailElement.classList.remove("index-contact-error-input");
		PhoneElement.classList.remove("index-contact-error-input");
		CountryElement.classList.remove("index-contact-error-input");
		PreferredcontactemailElement.classList.remove("index-contact-error-radio");
		PreferredcontactphoneElement.classList.remove("index-contact-error-radio");
		PreferredlanguageenglishElement.classList.remove("index-contact-error-radio");
		PreferredlanguagepolishElement.classList.remove("index-contact-error-radio");
		MessageElement.classList.remove("index-contact-error-input");
		TermsElement.classList.remove("index-contact-error-terms");

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
		MessageNot.style.display = "none";
		MessageLetters.style.display = "none";
		TermsNot.style.display = "none";

//      Sent
		if(Sent) {
			Errors.push("Sent");
		}

//	 	 First name
	 	if(Firstname !== '') {
	 		if(Firstname.length < 3) {
	 			Errors.push("FirstnameLetters");
				FirstnameElement.classList.add("index-contact-error-input");
			}

			if(ContainNumbers(Firstname)) {
				Errors.push("FirstnameNumbers");
				FirstnameElement.classList.add("index-contact-error-input");
			}
		}
		else {
			Errors.push("FirstnameNot");
			FirstnameElement.classList.add("index-contact-error-input");
		}

//		Second name
		if(Lastname !== '') {
			if(Lastname.length < 3) {
				Errors.push("LastnameLetters");
				LastnameElement.classList.add("index-contact-error-input");
			}

			if(ContainNumbers(Lastname)) {
				Errors.push("LastnameNumbers");
				LastnameElement.classList.add("index-contact-error-input");
			}
		}
		else {
			Errors.push("LastnameNot");
			LastnameElement.classList.add("index-contact-error-input");
		}

//		Email
		if(Email !== '') {
			if(ValidateEmail(Email)) {
				Errors.push("EmailIncorrect");
				EmailElement.classList.add("index-contact-error-input");
			}
		}
		else {
			Errors.push("EmailNot");
			EmailElement.classList.add("index-contact-error-input");
		}

//		Phone
		if(Phone !== '') {
			if(ContainLetters(Phone)) {
				Errors.push("PhoneIncorrect");
				PhoneElement.classList.add("index-contact-error-input");
			}
		}
		else {
			Errors.push("PhoneNot");
			PhoneElement.classList.add("index-contact-error-input");
		}

//		Country
		if(Country !== '') {
			if(ContainNumbers(Country)) {
				Errors.push("CountryNumbers");
				CountryElement.classList.add("index-contact-error-input");
			}
		}
		else {
			Errors.push("CountryNot");
			CountryElement.classList.add("index-contact-error-input");
		}

//		Preferred method of contact
		if(Preferredcontact !== '') {
			if(Preferredcontact !== "email" && Preferredcontact !== "phone") {
				Errors.push("PreferredcontactBroken");
				PreferredcontactemailElement.classList.add("index-contact-error-radio");
				PreferredcontactphoneElement.classList.add("index-contact-error-radio");
			}
		}
		else {
			Errors.push("PreferredcontactNot");
			PreferredcontactemailElement.classList.add("index-contact-error-radio");
			PreferredcontactphoneElement.classList.add("index-contact-error-radio");
		}

//		Preferred contact language
		if(Preferredlanguage !== '') {
			if(Preferredlanguage !== "english" && Preferredlanguage !== "polish") {
				Errors.push("PreferredlanguageBroken");
				PreferredlanguageenglishElement.classList.add("index-contact-error-radio");
				PreferredlanguageenglishElement.classList.add("index-contact-error-radio");
			}
		}
		else {
			Errors.push("PreferredlanguageNot");
			PreferredlanguageenglishElement.classList.add("index-contact-error-radio");
			PreferredlanguagepolishElement.classList.add("index-contact-error-radio");
		}

//		Message
		if(Message !== '') {
			if(Message.length < 20) {
				Errors.push("MessageLetters");
				MessageElement.classList.add("index-contact-error-input");
			}
		}
		else {
			Errors.push("MessageNot");
			MessageElement.classList.add("index-contact-error-input");
		}

		//		Terms
		if(!Terms) {
			Errors.push("TermsNot");
			TermsElement.classList.add("index-contact-error-terms");
		}

//		Submit or show errors
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

export default ContactValidation;