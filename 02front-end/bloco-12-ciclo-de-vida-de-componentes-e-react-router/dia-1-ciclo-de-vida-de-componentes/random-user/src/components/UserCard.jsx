import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserCard extends Component {
  render() {
    const {  photoUrl, name, email, age  } = this.props;
    return (
      <div className="user-card">
        <img
          src={ photoUrl }
          alt={ name }
          className="user-image"
        />
        <div>
          <h4>{name}</h4>
          <p>{email}</p>
          <p>{age} years</p>
        </div>
      </div>
    );
  }
}

UserCard.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default UserCard;
