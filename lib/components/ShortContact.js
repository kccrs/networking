import React, { Component } from 'react';
import firebase from '../firebase';


export default class ShortContact extends Component {
  constructor(props) {
    super();
  }

  get reference() {
    // debugger;
    return firebase.database().ref(`user-contacts/${this.props.reference.key}`);
  }

  toggleFollowUp() {
    this.props.handleFollowUp(this.props.reference.key);
  }

  render() {
    return (
      <article className="ShortContact" onClick={() => {
        console.log('hello casey');}
      }>
      <p>{this.props.photo}</p>
      <p>{this.props.firstName} {this.props.lastName}</p>
      <p>Company: {this.props.company}</p>
      <label>
        Follow Up
        <input type="checkbox" name="FollowUp" value={this.props.followUp} onClick={() => this.toggleFollowUp()} />
      </label>
      </article>
    );
  }
}
