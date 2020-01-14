const amountWords = 100,
    minLetter = 1,
    maxLetter = 9,
    arrLetters = [];
let amountLetter = 0;
const random = (min, max) => Math.floor(Math.random() * ((max + 1) - min) + min);
for (let words = 0; words < amountWords; words++) {
    arrLetters[words] = [];
    amountLetter = random(minLetter, maxLetter);
    for (let count = 0; count < amountLetter; count++) {
        arrLetters[words][count] = String.fromCharCode(random(97, 122));
    }
}
arrLetters.map((value,index) => console.log(`${index + 1} string : ${value.join('')} `));
