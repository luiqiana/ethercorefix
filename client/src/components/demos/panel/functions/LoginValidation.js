import {Inputs} from "../Login";

import OnlyLettersAndNumbers from "../../../../functions/OnlyLettersAndNumbers";
import validatePassword from '../../../../functions/ValidatePassword';

class LoginValidation {
	static validate() {
		let Errors = [];

		if(!Inputs.user) {
			Errors.push("NotUser");
		}

		if(!Inputs.pass) {
			Errors.push("NotPass");
		}

		if(Errors.length === 0) {
			return {
				user: OnlyLettersAndNumbers(Inputs.user),
				pass: validatePassword(Inputs.pass)
			};
		}
		else {
			return false;
		}
	}
}

export default LoginValidation;