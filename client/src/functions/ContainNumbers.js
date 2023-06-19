export default function ContainNumbers(text) {
	return text.match(/\d+/g) !== null;
}