//2.Desenvolva um algoritmo que é capaz de inverter uma palavra.
let word = 'tryber';
let reverseWord = "";

for (char = word.length -1; char >= 0; char -= 1) {
  reverseWord += word[char];
}

console.log(reverseWord);