const Redux = require('redux');

//Action:
const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
});

const INITIAL_STATE = {
  login: false,
  email: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: 
      return state;
  }
};
  
// "Banco de dados" que armazena o estado compartilhado da aplicação
const store = Redux.createStore(reducer);

//Entrega a action para o reducer:
store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());
