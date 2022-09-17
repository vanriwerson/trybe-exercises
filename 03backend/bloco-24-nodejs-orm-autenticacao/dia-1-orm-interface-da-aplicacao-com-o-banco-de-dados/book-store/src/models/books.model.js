const bookSchema = (sequelize, DataTypes) => {
  const book = sequelize.define('booksModel', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return book;
};

module.exports = bookSchema;