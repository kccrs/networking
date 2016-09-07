import React, { Component } from 'react';
import firebase from '../firebase';

import SignIn from './SignIn';
import UserInfo from './UserInfo';
import TaskList from './TaskList';

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
      return (
        <div className="Application logged-in">
          <UserInfo user={user}/>
          <TaskList uid={user.uid}/>
        </div>
      );
    }
    return (
      <div className="Application not-logged-in">
        <SignIn />
      </div>
    );
  }
}
