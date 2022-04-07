function encode(string) {
  string = string.toLowerCase();

  const encoded = string.replaceAll('a', '1').replaceAll('e', '2').replaceAll('i', '3').replaceAll('o', '4').replaceAll('u', '5');
  return encoded;
}
function decode(string) {
  string = string.toLowerCase();

  const decoded = string.replaceAll('1', 'a').replaceAll('2', 'e').replaceAll('3', 'i').replaceAll('4', 'o').replaceAll('5', 'u');
  return decoded;
}

console.log(encode('Ola, Bruno! Treine bastante'));
console.log(decode(encode('Ola, Bruno! Treine bastante')));
module.exports = encode, decode;