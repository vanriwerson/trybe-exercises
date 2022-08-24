const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

// const generateToken = (len) => {
//   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   const randomChar = () => chars.charAt(Math.floor(Math.random() * chars.length));
//   let token = '';

//   for(let char = 1; char <= len; char += 1) {
//     token += randomChar();
//   }

//   return token;
// }

module.exports = generateToken;