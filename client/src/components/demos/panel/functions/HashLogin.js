import saltAndPepperGen, {addPepper} from "../../../../functions/SaltAndPepper";

const saltLength = 13;
const pepperLength = 8;
const equalsPepperLength = 2;

class HashLogin {
	static hash(obj) {
		// To base64
		const hash = {
			user: btoa(obj.user),
			pass: btoa(obj.pass)
		};

		// Count equals chars
		let equals = {
			user: 0,
			pass: 0
		}
		if((hash.user).match(/=+/g)) {
			equals.user = ((hash.user).match(/=+/g) || [])[0].length;
		}
		else {
			equals.user = 0;
		}

		if((hash.pass).match(/=+/g)) {
			equals.pass = ((hash.pass).match(/=+/g) || [])[0].length;
		}
		else {
			equals.pass = 0;
		}

		// Remove equals from string
		const removedEquals = {
			user: (hash.user).replace(/=+/g, ''),
			pass: (hash.pass).replace(/=+/g, '')
		};

		// Add salt and pepper to string
		const saltAndPepper = {
			user: saltAndPepperGen(removedEquals.user, saltLength, pepperLength),
			pass: saltAndPepperGen(removedEquals.pass, saltLength, pepperLength)
		};

		// Add equals to string
		const addEquals = {
			user: saltAndPepper.user + equals.user.toString(),
			pass: saltAndPepper.pass + equals.pass.toString()
		};

		// Add second pepper to string
		return {
			user: addPepper(addEquals.user, equalsPepperLength),
			pass: addPepper(addEquals.pass, equalsPepperLength)
		};
	}
}

export default HashLogin;