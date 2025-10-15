<h1>Part 1</h1>
//After identifying the variables from the story, specify their primitive data types in JavaScript. Also, provide these variables with some initial values.
let letters = "abcdefghijklmnopqrstuvwxyz";
let partyLocation = "Garden"; // String
let shiftValue = 3; // Number
let encryptedMessage = ""; // String
let decryptedMessage = ""; // String
let isPartySafe = false; // Boolean

<h1>Part 2</h1>
//From the variables you've identified, determine which ones should be declared using const and which ones should use let.
let partyLocation = "GARDEN";
let encryptedMessage = "";
const shiftValue = 3;
let decryptedMessage = "";
let isPartySafe = false;

<h1>Part 3</h1>
//Given the variable shiftValue, write a piece of code to check if its value is an integer.
const shiftValue = 3;
Number.isInteger(shiftValue);

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

<h1>Part 4</h1>
const randomDecimal = Math.random();
const Range = 33 - 3 + 1;
const randomInRange = randomDecimal * range;
const randomInt = Math.floor(randomInRange);
const shiftValue = randomInt + 3;

//Question 1 Why did we add 1 to the difference between 33 and 3? To ensure we include both ends of the range 3 and 33, giving use 31 potential numbers from 3 to 33.

//Question 2 Multiplying the randomDecimal by the range scales the decimal to fall within the range of 0 to range.

//Question 3 We use Math.floor() to ensure we always round down to the nearest whole number, giving us an integer between 0 and range - 1.

//Question 4 Since randomInt is a number between 0 and range - 1 , adding 3 shifts this range upward, resulting in numbers between 3 and 33.

const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

let locationStart = "";

if (emblemClue1 === "Eagle")
{
  locationStart = "Forum";
}
else if (emblemClue1 === "Lion")
{
  locationStart = "Colosseum";
}
else
{
  locationStart = "Villa";
}

if (emblemClue2 === "Laurel" && locationStart === "Forum")
{
  locationStart += " of Augustus";
}
else if (emblemClue2 === "Grapes" || locationStart === "Villa")
{
  locationStart += " of Pompey";
}


switch (emblemClue3)
{
  case 7:
    locationStart += " North";
    break;
  case 3:
    locationStart += " South";
    break;
  case 9:
    locationStart += " East";
    break;
  case 4:
    locationStart += " West";
    break;
}

//Using == (double equals) performs type coercion, meaning it tries to convert the operands to the same type before making the comparison. On the other hand, === (triple equals) checks both the value and the type, ensuring a stricter equality check.