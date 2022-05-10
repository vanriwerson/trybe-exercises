import React from 'react';
import Image from './Image';
import './UserProfile.css'

class UserProfile extends React.Component {
  render() {
    return (
      <div className='profile-card'>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
        <Image source={this.props.user.avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;