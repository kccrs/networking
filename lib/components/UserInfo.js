import React, { Component } from 'react';
import firebase from '../firebase';

export default class UserInfo extends Component {
  constructor({user , handleClick}) {
    super();
  }     

  render() {
    const { user, handleClick , handleBackClick} = this.props;

    return(
      <header className="UserInfo">
        <button aria-label="AddNewContact"
          className="AddNewContact"
          onClick={() => handleClick()}>
        </button>
        <div className="UserInfoSection">
          <button className="SignOutMessage">
            Sign Out -->
          </button>
          <img className="userPhoto"
            src={user.photoURL}
            alt={`${user.displayName} Photograph`}
            onClick={() =>  firebase.auth().signOut()}
          />
        </div>
      </header>
    )
  }
}
