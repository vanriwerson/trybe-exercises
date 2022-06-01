import React, { Component } from 'react';
import './RandomUser.css';
import UserCard from './UserCard';

class RandomUser extends Component {
  state = {
    savedUsers: [],
    loading: true,
  }
  
  fetchRandomUser = async () => {
    const URL = 'https://api.randomuser.me/';
    const response = await fetch(URL);
    const data = await response.json();
    
    const {
      picture: { large },
      name: { first, last },
      email,
      dob: { age },
    } = data.results[0];
    const userFullName = `${first} ${last}`;
    
    const newRandomUser = {
      photoUrl: large,
      name: userFullName,
      email: email,
      age: age,    
    }

    this.setState({
      savedUsers: [newRandomUser],
      loading: false,
    });
  }

  componentDidMount() {
    this.fetchRandomUser();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;
    if (nextState.savedUsers[0].age > AGE) {
      return false;
    }
    return true;
  }

  updateRandomUser = () => {
    const { savedUsers } = this.state;
    this.setState(({
      savedUsers: [...savedUsers],
      loading: true,
    }), this.fetchRandomUser);
  }

  render() {
    const loadingElement = <p><em>Carregando...</em></p>;
    const { savedUsers, loading } = this.state;

    return (
      <div className="user-display">
        {loading ? loadingElement : savedUsers.map((user, index) => {
          return (
            <UserCard
              key={ index }
              photoUrl={ user.photoUrl }
              name={ user.name }
              email={ user.email }
              age={ user.age }
            />
          );
        })}

        <button
          type="button"
          onClick={ this.updateRandomUser }
          className="command-button"
        >
          Get anoter user!
        </button>
      </div>
    );
  }
}

export default RandomUser;
