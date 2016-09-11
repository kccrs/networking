import React, { Component } from 'react';
var _ = require('lodash');
import firebase from '../firebase';
import CreateContact from './CreateContact';
import Contact from './Contact';
import ShortContact from './ShortContact';

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

  toggleFollowUp(key) {
    
    this.reference.update({followUp: false});
  }

  render() {
    const contacts = this.state.contacts.map((contact) => <ShortContact {...contact} reference={this.reference.child(contact.key)} handleFollowUp={this.toggleFollowUp} />);
    console.log(contacts);
    return (
      <section className="ContactList">
        <h3>Contact List</h3>
        <CreateContact reference={this.reference}/>
        {contacts}
      </section>
    );
  }
}
