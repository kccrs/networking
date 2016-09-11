import React, { Component } from 'react';
import firebase from '../firebase';


export default class ShortContact extends Component {
  constructor({photo, firstName, lastName, company, followUp}) {
    super();
    this.state = {
      followUp: followUp.value
    };
  }

  toggleFollowUp() {
    if (this.state.followUp) {
      return (this.state.followUp = false);
    }
    return (this.state.followUp = true);
  }

  render() {
    return (
      <article className="ShortContact" onClick={() => {
        console.log('hello casey');}
      }>
      <p>{photo}</p>
      <p>{firstName} {lastName}</p>
      <p>Company: {company}</p>
      <label>
        Follow Up
        <input type="checkbox" name="FollowUp" value="{this.state.followUp}" onClick={() => this.toggleFollowUp()} />
      </label>
      </article>
    );
  }
}
