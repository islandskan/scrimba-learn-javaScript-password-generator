// Values
const PASSWORDLENGTH = 15;

// All of the characters that can be generated
const characters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '~',
    '`',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '-',
    '+',
    '=',
    '{',
    '[',
    '}',
    ']',
    ',',
    '|',
    ':',
    ';',
    '<',
    '>',
    '.',
    '?',
    '/',
];

// DOM elements
const btn = document.querySelector('.password-btn'); // btn to generate passwords
let passElOne = document.querySelector('.pass-one'); // password 1
let passElTwo = document.querySelector('.pass-two'); // password 2
const toast = document.querySelector('#toast');
passElOne.textContent = '';
passElTwo.textContent = '';

// GET RANDOM CHARCTERS FROM THE ARRAY
function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    // console.log(characters.length);  // 91 characters
    // console.log(randomChar); // randomizing the indeces of the characters in the array
    // console.log(characters[randomChar]); // prints out the randomized items in the array, the indeces are randomized and used to access the item
    return characters[randomChar];
}

// GENERATE PASSWORD BASED ON GETRANDOMCHARACTER FUNCTION AND PASSWORDLENGTH
function generateRandomPassword() {
    let randomPassOne = '';
    let randomPassTwo = '';
    for (let i = 0; i < PASSWORDLENGTH; i++) {
        randomPassOne += getRandomCharacter();
        randomPassTwo += getRandomCharacter();
    }
    passElOne.textContent = randomPassOne;
    passElTwo.textContent = randomPassTwo;
}

// SHOW TOAST WHEN COPYING PASSWORDS

function showToast() {
    if (toast.classList.contains === 'show') {
        toast.classList.remove('show');
    }
    toast.classList.add('show');
    setTimeout(function () {
        toast.classList.remove('show');
    }, 2500);
}

// COPY GENERATED PASSWORDS TO THE CLIPBOARD
// function copyPassword(elementId) {
//     const textCopied = document.getElementById(elementId).textContent;
//     if (textCopied === '' || textCopied === undefined || textCopied === null) {
//         console.log('Nothing will be copied');
//     } else {
//         navigator.clipboard
//             .writeText(textCopied)
//             .then(() => {
//                 // console.log(`${textCopied} was copied to the clipboard`);
//                 showToast();
//             })
//             .catch((err) =>
//                 console.error(`Couldn't copy to the clipboard: ${err}`)
//             );
//     }
// }

// Rewriting as async function
async function copyPassword(elementId) {
    const textCopied = document.getElementById(elementId).textContent;
    try {
        await navigator.clipboard.writeText(textCopied);
        toast.textContent = 'Copied to clipboard';
        showToast();
    } catch (error) {
        console.log(error.message);
    }

    if (textCopied === '' || textCopied === undefined || textCopied === null) {
        showToast();
        toast.textContent = 'You need to generate passwords first';
    }
}
