const validateRating = require('./validateRating');
const validateCreatedAt = require('./validateCreatedAt');
const validateDescription = require('./validateDescription');
const validateName = require('./validateName');
const validatePrice = require('./validatePrice');

module.exports = {
  validateRating,
  validateCreatedAt,  
  validateDescription,  
  validateName,
  validatePrice
};
