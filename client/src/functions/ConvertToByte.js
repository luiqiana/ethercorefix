export default function toByte(string) {
	let myBuffer = [];
	const buffer = new Buffer(string, 'utf16le');
	for(let i = 0; i < buffer.length; i++) {
		myBuffer.push(buffer[i]);
	}
	return myBuffer;
}