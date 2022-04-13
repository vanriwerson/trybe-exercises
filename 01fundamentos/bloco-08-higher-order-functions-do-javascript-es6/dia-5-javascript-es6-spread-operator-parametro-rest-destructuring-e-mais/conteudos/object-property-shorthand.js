const newUser = (id, name, email) => {
  return { // Object Property Shorthand elimina repetições
    id, // id: id,
    name, // name: name,
    email, // email: email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// Fixação:
// Altere a função getPosition utilizando a property shorthand.
// const getPosition = (latitude, longitude) => ({
//   latitude: latitude,
//   longitude: longitude});
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));