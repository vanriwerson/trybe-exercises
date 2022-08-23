const validateFields = (value, res, field) => {
  if (!value) {
    return res.status(400).json(
      { message: `O campo ${field} é obrigatório` },
    );
  }
};

module.exports = (req, res, next) => {
  const { description } = req.body;
  const { createdAt, rating, difficulty } = description;
  
  return validateFields(description, res, 'description')
    || validateFields(createdAt, res, 'createdAt')
    || validateFields(rating, res, 'rating')
    || validateFields(difficulty, res, 'difficulty')
    || next();

  // if (!description) {
  //   return res.status(400).json(
  //     { message: 'O campo description é obrigatório' },
  //   );
  // }

  // if (!createdAt) {
  //   return res.status(400).json(
  //     { message: 'O campo createdAt é obrigatório' },
  //   );
  // }

  // if (!rating) {
  //   return res.status(400).json(
  //     { message: 'O campo rating é obrigatório' },
  //   );
  // }

  // if (!difficulty) {
  //   return res.status(400).json(
  //     { message: 'O campo difficulty é obrigatório' },
  //   );
  // }

  // next();
};
