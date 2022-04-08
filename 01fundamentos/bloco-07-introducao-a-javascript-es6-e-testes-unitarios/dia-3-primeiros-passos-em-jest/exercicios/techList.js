const techList = (array, name) => {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let generatedList = [];
  array = array.sort();
  array.forEach((tech) => {
    generatedList.push({
      tech: tech,
      name: name
    })
  });
  return generatedList;
};

module.exports = techList;
