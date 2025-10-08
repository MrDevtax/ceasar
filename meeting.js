const friend = "BRUTUS"
const shiftValue = 3;

let alphabet = "abcdefghijklmnopqrstuvwxyz";

const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());

// the first item of a string in javascript is zero based on javascriptsvzero-based index.

const newIndex = index + shiftValue;
const encryptedFirstLetter = alphabet[newIndex];

//The modulus operator, %.

const alphabetLength = alphabet.length;

const alphabetLength = alphabet.length;
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];

const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3);
