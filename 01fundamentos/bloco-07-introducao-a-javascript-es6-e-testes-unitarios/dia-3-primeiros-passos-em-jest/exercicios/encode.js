const encode = (string) => {
  string = string.toLowerCase();

  const encoded = string.replaceAll('a', '1').replaceAll('e', '2').replaceAll('i', '3').replaceAll('o', '4').replaceAll('u', '5');
  return encoded;
};

module.exports = encode;
