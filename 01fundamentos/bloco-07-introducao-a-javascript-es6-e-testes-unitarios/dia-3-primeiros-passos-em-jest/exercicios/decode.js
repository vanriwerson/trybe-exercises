const decode = (string) => {
  string = string.toLowerCase();

  const decoded = string.replaceAll('1', 'a').replaceAll('2', 'e').replaceAll('3', 'i').replaceAll('4', 'o').replaceAll('5', 'u');
  return decoded;
};

module.exports = decode;
