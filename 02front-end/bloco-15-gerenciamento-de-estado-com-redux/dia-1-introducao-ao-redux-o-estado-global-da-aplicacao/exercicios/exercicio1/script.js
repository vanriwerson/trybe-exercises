const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'grey', 'green', 'blue', 'yellow', 'purple'],
  index: 0,
};

const NEXT_COLOR = { type: 'NEXT_COLOR' };
const PREVIOUS_COLOR = { type: 'PREVIOUS_COLOR' };

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

    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

const container = document.getElementById('container');
const textColor = document.getElementById('value');
const buttonPrev = document.getElementById('previous');
const buttonNext = document.getElementById('next');

buttonNext.addEventListener('click', () => {
  store.dispatch(NEXT_COLOR);
  const { colors, index } = store.getState();
  textColor.innerText = colors[index];
  textColor.parentElement.style.color = colors[index] === 'black' ? 'white' : 'black';
  container.style.backgroundColor = colors[index];
});

buttonPrev.addEventListener('click', () => {
  store.dispatch(PREVIOUS_COLOR);
  const { colors, index } = store.getState();
  textColor.innerText = colors[index];
  textColor.parentElement.style.color = colors[index] === 'black' ? 'white' : 'black';
  container.style.backgroundColor = colors[index];
});
