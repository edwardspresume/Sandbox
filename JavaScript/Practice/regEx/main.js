console.clear();
const file = require('./module');

/* ==========================================================================
                                 Data input
   ========================================================================== */

let address = "244 North main, Spring valley, NY 10977";
let number = "(845)-793-6333";
let email = "testEmail@aol.com";

/* ==========================================================================
                                 RegEx
   ========================================================================== */

// The * means look for instances of i and i follow n number of s's
let reg = /is*/g;

// Looks for instances of a or a followed by n number of a's
let a_n = /a+/g;

// Break the text into segments of 3's
let segmentsOfThree = /.{1,3}/;

// the string has to be the word text. ^ means the string has to start with that word & $ mean the string has to end with that word
let singleWord = /^text$/;

// (.) the dot means we can match anything. If we want to match the dot we have to \escape it
let regExAnything = /.+/;

// Get the digits at the start of the string
let regExStreetNumber = /^\d+/;

// Capitalize letters followed by a space and a 5 number digit that only appears at the end.
let regExStateZip = /[A-Z]+\s\d{5}$/;

//The character class: [] states that we can match any of the char's within it. If we used the carrot symbol (^) were saying any char's that is not the ones we listed
let regExPhoneNumber = /^[\d\-\s]+$/;
// let regExPhoneNumber = /\(?\d{3}[-.)]+\d{3}-\d{4}/;

let regExEmail = /\w+@\w+\.(net|com|org)/;

/* ==========================================================================
                                 Output
   ========================================================================== */

// let test = number.match(regExPhoneNumber);

console.log(file());