const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'grey', 'green', 'blue', 'yellow', 'purple'],
  index: 0,
};

const NEXT_COLOR = { type: 'NEXT_COLOR' };
const PREVIOUS_COLOR = { type: 'PREVIOUS_COLOR' };
const RANDOM_COLOR = { type: 'RANDOM_COLOR' };

const getRandomColor = () => {
  const randomNUmber = () => Math.floor(Math.random() * 256);

  return `rgb(${randomNUmber()}, ${randomNUmber()}, ${randomNUmber()})`;
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };

    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };

      case 'RANDOM_COLOR':
        return {
          ...state,
          colors: [...state.colors, getRandomColor()],
          index: state.colors.length,
        };

    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

const container = document.getElementById('container');
const textColor = document.getElementById('value');
const buttonPrev = document.getElementById('previous');
const buttonNext = document.getElementById('next');
const buttonRandom = document.getElementById('random');

buttonNext.addEventListener('click', () => {
  store.dispatch(NEXT_COLOR);
});

buttonPrev.addEventListener('click', () => {
  store.dispatch(PREVIOUS_COLOR);
});

buttonRandom.addEventListener('click', () => {
  store.dispatch(RANDOM_COLOR);
});

//Executa a cada alteração do estado
store.subscribe(() => {
  const { colors, index } = store.getState();
  textColor.innerText = colors[index];
  textColor.parentElement.style.color = colors[index] === 'black' ? 'white' : 'black';
  container.style.backgroundColor = colors[index];
});
