import React, { Component } from 'react';
import firebase from '../firebase';

import SignIn from './SignIn';
import UserInfo from './UserInfo';
import ContactList from './ContactList';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;
    if (user) {
      console.log('user logged in');
      return (
        <div className="Application logged-in">
          <UserInfo user={user}/>
          <ContactList uid={user.uid}/>
        </div>
      );
    }
    console.log('user logged out');
    return (
      <div className="Application not-logged-in">
        <SignIn />
      </div>
    );
  }
}
