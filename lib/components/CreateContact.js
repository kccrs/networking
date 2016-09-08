import React, { Component } from 'react';
import firebase from '../firebase';

export default class CreateContact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: ''
    };
  }

  createContact(e) {
    e.preventDefault();

    const { reference } = this.props;
    const { firstName, lastName } = this.state;

    reference.push({ firstName , lastName , isCompleted: false });
    this.setState({ firstName: '', lastName: '' });
  }

  render() {
    return (
      <form className="CreateContact" onSubmit={this.createContact.bind(this)}>
        <input
          placeholder="first name"
          value={this.state.firstName}
          onChange={(e) => this.setState({ firstName: e.target.value })}
        />
        <input
          placeholder="last name"
          value={this.state.lastName}
          onChange={(e) => this.setState({ lastName: e.target.value })}
        />
        <input type="submit" value="Create Contact" />
      </form>
    );
  }
}
