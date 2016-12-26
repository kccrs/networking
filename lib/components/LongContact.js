import React, { Component } from 'react';
import firebase from '../firebase';


export default class LongContact extends Component {
  constructor(props) {
    super(props);
  }

  updateProperty(property, value) {
    if (value) {
      return this.props.updateFunction(this.props.reference.key, property, false);
    }
    if (!value) {
      return this.props.updateFunction(this.props.reference.key, property, true);
    }
  }

  setSelected() {
    return this.props.setSelected(this.props.reference.key);
  }

  render() {
    return (
      <article className={this.followUpClass(this.props.followUp)}
        onClick={() => this.setSelected()}
      >
        <p>{this.props.photo}</p>
        <p>{this.props.firstName} {this.props.lastName}</p>
        <p>Company: {this.props.company}</p>
        <p>Company: {this.props.email}</p>
        <button
          className="followUp"
          name="Follow Up"
          value={this.props.followUp}
          onClick={() => this.updateProperty(this.name, this.props.followUp)}
        >
          Follow Up
        </button>
      </article>
    );
  }
}
