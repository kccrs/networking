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
      selectedContact: null,
      followUpActive: false
    };
  }

  get reference() {
    return firebase.database().ref(`user-contacts/${this.props.uid}`);
  }

  componentDidMount() {
    this.reference.on('value', (snapshot) => {
      const contacts = snapshot.val();
      if (!contacts) {
        return this.setState({ contacts: [] });
      }
      this.setState({
        contacts: _.map(Object.entries(contacts),
          ([key, value]) => Object.assign({ key }, value)
        )
      });
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
      return contact.selected === true;
    });
  }

  toggleFollowUp(boolean) {
    if (boolean) {
      this.setState({followUpActive: false});
    }
    if (!boolean) {
      this.setState({followUpActive: true});
    }
  }

  render() {
    const selectedContact = this.state.selectedContact;
    const followUpActive = this.state.followUpActive;
    let originalContacts = this.state.contacts;

    if (followUpActive) { originalContacts = this.state.contacts.filter((contact) => {
      return contact.followUp === true;
      });
    }

    if (selectedContact) {
      return (
        <section className="ContactList">
          <h3>Contact List</h3>
          <Contact {...selectedContact}
            reference={this.reference.child(selectedContact.key)}
            handleDeselect={() => this.setState({ selectedContact: null })}
            updateFunction={this.updateRecord}
          />
        </section>
      )
    }
    const contacts = _.map(originalContacts, (contact) => {
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
        <button className="FollowUpButton" onClick={() => this.toggleFollowUp(followUpActive)}>
          Follow Up
        </button>
        <div className="shortContainer">
          {contacts}
        </div>
      </section>
    );
  }
}
