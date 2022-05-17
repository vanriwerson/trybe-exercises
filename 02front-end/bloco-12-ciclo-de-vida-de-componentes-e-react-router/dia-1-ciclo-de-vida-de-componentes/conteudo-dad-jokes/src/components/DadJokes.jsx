import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
      loading: false,
    });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    const { jokeObj, storedJokes } = this.state;
    this.setState(({
      storedJokes: [...storedJokes, jokeObj],
      loading: true,
    }), this.fetchJoke)
  }

  renderJokeElement() {
    const { jokeObj } = this.state;
    const { joke } = jokeObj;
    return (
      <div>
        <p>{ joke }</p>
        <button
          type="button"
          onClick={ this.saveJoke}
        >
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      {loading ? loadingElement : this.renderJokeElement()}

      </div>
    );
  }
}

export default DadJoke;