export default function validatePassword(string) {
	return (string.match(/[a-zA-Z0-9!.,&^_]+/g) || []).join('');
}