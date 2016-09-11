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

  updateProperty(property, value) {

    if (value) {
      return this.props.updateFunction(this.props.reference.key , property , false);
    }
    if (!value) {
      return this.props.updateFunction(this.props.reference.key , property , true);
    }
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
        <input type="checkbox" name="followUp" value={this.props.followUp} onClick={() => this.updateProperty(this.name, this.props.followUp)} />
      </label>
      </article>
    );
  }
}
