export function toHexString(byteArray) {
	return Array.from(byteArray, function(byte1) {
		return ('0' + (byte1 & 0xFF).toString(16)).slice(-2);
	}).join('')
}