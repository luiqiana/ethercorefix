import {demopanelIndexForm} from "../Index";

class validateIndexForm {
	static validate() {
		const caseElement = document.getElementById("formCase");
		const messageElement = document.getElementById("formMessage");

		const sentError = document.getElementById("sentError");
		const caseError = document.getElementById("caseError");
		const messageError = document.getElementById("messageError");

		caseElement.classList.remove("demopanel-form-error");
		messageElement.classList.remove("demopanel-form-error");

		sentError.style.display = "none";
		caseError.style.display = "none";
		messageError.style.display = "none";

		const formCase = demopanelIndexForm.formCase;
		const formMessage = demopanelIndexForm.formMessage;
		const sent = demopanelIndexForm.sent;

		let errors = [];

		if(formCase.length < 4) {
			errors.push("caseError");
			caseElement.classList.add("demopanel-form-error");
		}

		if(formMessage.length < 20) {
			errors.push("messageError");
			messageElement.classList.add("demopanel-form-error");
		}

		if(sent) {
			errors.push("sentError");
		}

		if(errors.length === 0 || errors.includes("sentError")) {
			if(errors.includes("sentError")) {
				sentError.style.display = "block";
				return false;
			}
			else {
				return true;
			}
		}
		else {
			for(let i = 0; i < errors.length; i++) {
				// eslint-disable-next-line
				(eval(errors[i])).style.display = "block";
			}
			return false;
		}
	}
}

export default validateIndexForm;