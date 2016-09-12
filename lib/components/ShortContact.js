import React, { Component } from 'react';
import firebase from '../firebase';


export default class ShortContact extends Component {
  constructor(props) {
    super();
  }

  updateProperty(oldValue ,property, value) {
    if (value === true) return this.props.updateFunction(property, value);
    if (value === false) return this.props.updateFunction(property, value);
  }

  followUpClass(boolean) {
    if (boolean)
    {return "followUpActive";}
    if (!boolean)
    {return "followUpNotActive";}
  }

  render() {
    return (
      <article
        className={this.followUpClass(this.props.followUp)}
        onClick={this.props.handleClick}
      >
        <p>{this.props.photo}</p>
        <p>{this.props.firstName} {this.props.lastName} </p>
        <p>Company: {this.props.company}</p>
        <button className="followUp" name="followUp" value={this.props.followUp} onClick={() => this.updateProperty('followUp', this.props.followUp)}>Follow Up
        </button>
      </article>
    );
  }
}
