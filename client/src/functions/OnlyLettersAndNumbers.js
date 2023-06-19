export default function OnlyLettersAndNumbers(string) {
	return (string.match(/[a-zA-Z0-9]+/g) || []).join('');
}