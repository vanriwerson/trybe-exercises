const Difficulty = require('./validateDifficulty');
const Rating = require('./validateRating');
const CreatedAt = require('./validateCreatedAt');
const Description = require('./validateDescription');
const Name = require('./validateName');
const Price = require('./validatePrice');

module.exports = {
  Difficulty,
  Rating,
  CreatedAt,  
  Description,  
  Name,
  Price
};
