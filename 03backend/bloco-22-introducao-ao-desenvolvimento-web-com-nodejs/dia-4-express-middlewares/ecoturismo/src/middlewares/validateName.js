module.exports = (req, res, next) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json(
      { message: 'O campo name é obrigatório' },
    );
  }

  if (name.length <= 4) {
    return res.status(400).json(
      { message: 'O campo name deve ter mais de 4 caracteres' },
    );
  }

  next();
};
