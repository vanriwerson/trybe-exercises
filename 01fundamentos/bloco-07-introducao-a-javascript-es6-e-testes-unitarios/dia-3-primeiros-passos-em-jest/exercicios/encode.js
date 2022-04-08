const encode = (string) => {
  string = string.toLowerCase();

  const encoded = string.replaceAll('a', '1').replaceAll('e', '2').replaceAll('i', '3').replaceAll('o', '4').replaceAll('u', '5');
  return encoded;
};

const decode = (string) => {
  string = string.toLowerCase();

  const decoded = string.replaceAll('1', 'a').replaceAll('2', 'e').replaceAll('3', 'i').replaceAll('4', 'o').replaceAll('5', 'u');
  return decoded;
};

module.exports = {
  encode,
  decode,
};
