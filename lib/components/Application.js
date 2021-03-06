import React, { Component } from 'react';
import firebase from '../firebase';

import SignIn from './SignIn';
import UserInfo from './UserInfo';
import ContactList from './ContactList';
import CreateContact from './CreateContact';

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      addContact: false
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => { this.setState({ user });
    });
  }

  get reference() {
    return firebase.database().ref(`user-contacts/${this.state.user.uid}`);
  }

  render() {
    const { user , addContact } = this.state;
    if (addContact === true) {
      return (
        <div className="Application logged-in">
          <UserInfo user={user}
            handleClick={() => this.setState({ addContact: true })}
            handleBackClick={() => this.setState({ addContact: false })}
          />
          <CreateContact  reference={this.reference}
            handleBackClick={() => this.setState({ addContact: false })}
          />
        </div>
      );
    }
    if (user) {
      return (
        <div className="Application logged-in">
          <UserInfo user={user}
            handleClick={() => this.setState({ addContact: true })}
            handleBackClick={() => this.setState({ addContact: false })}
          />
          <ContactList uid={user.uid}/>
        </div>
      );
    }
    if (!user) {
      return (
        <div className="Application not-logged-in">
          <img
            src="../assets/cloud-network.svg"
            alt="Logo Photograph" className="HeroLogo"
          />
          <h1 className="title">GetWorking</h1>
            <SignIn />
        </div>
      );
    }
  }
}

module.exports = Application
