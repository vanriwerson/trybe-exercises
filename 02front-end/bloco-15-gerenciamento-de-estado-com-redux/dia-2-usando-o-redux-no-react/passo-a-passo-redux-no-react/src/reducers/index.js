import { combineReducers } from 'redux';
// Importar os reducers que serão utilizados pela aplicação
import myReducer from './myReducer';

const rootReducer = combineReducers(
  // Adicionar cada reducer importado como chave do objeto rootReducer
  { myReducer },
);

export default rootReducer;