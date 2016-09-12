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

  followUpClass(boolean) {
    if (boolean)
    {return "followUpActive"}
    if (!boolean)
    {return "followUpNotActive"}
  }

  render() {
    if (this.props.followUp) {

    }
    return (
      <article className={this.followUpClass(this.props.followUp)} onClick={() => {}}>
      <p>{this.props.photo}</p>
      <p>{this.props.firstName} {this.props.lastName}</p>
      <p>Company: {this.props.company}</p>
      <button className="followUp" name="followUp" value={this.props.followUp} onClick={() => this.updateProperty(this.name, this.props.followUp)}>Follow Up
      </button>
      </article>
    );
  }
}
