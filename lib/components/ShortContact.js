import React, { Component } from 'react';
import firebase from '../firebase';


export default class ShortContact extends Component {
  constructor(props) {
    super();
  }

  updateProperty(property, value) {
    if (value === true) return this.props.updateFunction(property, false);
    if (value === false) return this.props.updateFunction(property, true);
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
        className={this.followUpClass(this.props.followUp)}>
        <div className="ShortText" onClick={this.props.handleClick}>
          <p>{this.props.photo}</p>
          <p className="firstName">{this.props.firstName} {this.props.lastName} </p>
          <p>Company: {this.props.company}</p>
        </div>
        <button className="followUp" name="followUp" value={this.props.followUp} onClick={() => this.updateProperty('followUp', this.props.followUp)}>Follow Up
        </button>
      </article>
    );
  }
}
