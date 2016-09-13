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
          <button className="AddNewContact" onClick={() => handleClick()}>
          </button>
          <button className="BackButton" onClick={() => handleBackClick()}>
          Back
        </button>
        <button className="FollowUp">
          Follow Up
        </button>
        <div className="UserInfo--photograph">
          <img className="userPhoto"
            src={user.photoURL}
            alt={`${user.displayName} Photograph`}
          />
        </div>
        <button className="UserInfo--signOut" onClick={() =>  firebase.auth().signOut()}>
          Sign Out
        </button>
      </header>
    )
  }
}
