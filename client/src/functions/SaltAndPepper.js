const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12';
const charactersLength = characters.length;

export default function saltAndPepper(string, saltLength, pepperLength) {
	return addPepper(addSalt(string, saltLength), pepperLength);
}

function addSalt(string, length) {
	let salt = "";
	for(let i = 0; i < length; i++) {
		salt += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return salt + string;
}

export function addPepper(string, length) {
	let pepper = "";
	for(let i = 0; i < length; i++) {
		pepper += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return string + pepper;
}