import React, { Component } from 'react';
var _ = require('lodash');
import firebase from '../firebase';
import CreateContact from './CreateContact';
import Contact from './Contact';

export default class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
    };
  }

  get reference() {
    return firebase.database().ref(`user-contacts/${this.props.uid}`);
  }

  componentDidMount() {
    this.reference.on('value', (snapshot) => {
      const contacts = snapshot.val();
      if (!contacts) { return this.setState({ contacts: [] }); }
      console.log(Object.entries(contacts));
      this.setState({
        contacts: _.map(Object.entries(contacts) ,
          ([key, value]) => Object.assign({ key }, value)
        )
      });
      console.table(this.state.contacts);
    });
  }

  componentWillUnmount() {
    this.reference.off();
  }

  render() {
    const contacts = this.state.contacts.map((contact) => <Contact {...contact} reference={this.reference.child(contact.key)} />);
    console.log(contacts)
    return (
      <section className="ContactList">
        <h3>Contact List ({this.props.uid})</h3>
        <CreateContact reference={this.reference}/>
        {contacts}
      </section>
    );
    console.log(this.props.uid)
  }
}
