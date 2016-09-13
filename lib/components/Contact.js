import React, { Component } from 'react';
import firebase from '../firebase';

export default class Contact extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <article className="Contact">
        <p>{this.props.firstName} {this.props.lastName}</p>
        <p>{this.props.photo}</p>
        <p>Company: {this.props.company} Title: {this.props.jobTitle}</p>
        <p>Phone: {this.props.phone}</p>
        <p>Email: {this.props.email}</p>
        <ul>
          <li>Website: {this.props.website}</li>
          <li>GitHub: {this.props.gitHub}</li>
          <li>Twitter: {this.props.twitter}</li>
          <li>LinkedIn: {this.props.linkedIn}</li>
        </ul>
        <p>Category: {this.props.category}</p>
        <p>Notes: {this.props.notes}</p>
        <p>Follow Up: {this.props.followUp}</p>
        <button name="delete" onClick={()=>{ this.props.reference.remove(); this.props.handleDeselect() }} >
          Delete
        </button>
        <button name="edit"onClick={() => reference.update({firstName: 'Casey'})} >
          Edit
        </button>
        <button name="deselect"onClick={this.props.handleDeselect}>
          Deselect
        </button>
      </article>
    );
  }
}
