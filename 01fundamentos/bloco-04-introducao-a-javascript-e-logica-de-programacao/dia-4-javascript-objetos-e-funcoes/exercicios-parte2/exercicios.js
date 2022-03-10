//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function palindromeCheck (word) {
    let reverseWord = word.split('').reverse().join('');

    if(word === reverseWord) {
        //return true;
        console.log(true);
    } else {
        //return false;
        console.log(false);
    }
}

palindromeCheck('ovo');
