const bookSchema = (sequelize, DataTypes) => {
  const book = sequelize.define('book', { // O primeiro parâmetro do define é o nome da tabela no singular
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    publisher: DataTypes.STRING,
  });

  return book;
};

module.exports = bookSchema;