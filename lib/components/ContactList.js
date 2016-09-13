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
      selectedContact: null
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

  updateRecord(property, newValue) {
    this.reference.child(property).set(newValue);
  }

  checkForIndexOfSelected() {
    return _.findIndex(this.state.contacts, function(contact) {
      return contact.selected === true;});
  }

  render() {

    const selectedContact = this.state.selectedContact;

    if (selectedContact) {
      return (
        <section className="ContactList">
        <h3>Contact List</h3>
        <Contact {...selectedContact}
          reference={this.reference.child(selectedContact.key)}
          handleDeselect={() => this.setState({ selectedContact: null })}/>
        </section>
      )
    }
    const contacts = _.map(this.state.contacts, (contact) => {
      return (
        <ShortContact {...contact}
          reference={this.reference.child(contact.key)}
          handleClick={() => this.setState({selectedContact: contact})}
          updateFunction={this.updateRecord}
        />
      );
    });
    return (
      <section className="ContactList">
        <h3>Contact List</h3>
        {contacts}
      </section>
    );
  }

  // {/* <CreateContact reference={this.reference}/> */}

}

// <CreateContact reference={this.reference}/>
