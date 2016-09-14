import React, { Component } from 'react';
import firebase from '../firebase';
import CreateContact from './CreateContact';


export default class Contact extends Component {
  constructor(props) {
    super();
    this.state = {
      editable: false,
    };
  }

  render() {
    if (this.state.editable === false) {
      return (
        <article className="Contact">
          <p className="name">{this.props.firstName} {this.props.lastName}</p>
          <p>{this.props.photo}</p>
          <p>Company: {this.props.company}</p>
          <p>Job Title: {this.props.jobTitle}</p>
          <p>Primary Phone: {this.props.primaryPhone}</p>
          <p>Secondary Phone: {this.props.secondaryPhone}</p>
          <p>Primary Email: {this.props.primaryEmail}</p>
          <p>Secondary Email: {this.props.secondaryEmail}</p>
          <ul>
            <li>Website: {this.props.website}</li>
            <li>GitHub: {this.props.gitHub}</li>
            <li>Twitter: {this.props.twitter}</li>
            <li>LinkedIn: {this.props.linkedIn}</li>
          </ul>
          <p>Category: {this.props.category}</p>
          <p>Notes: {this.props.notes}</p>
          <p>Follow Up: {JSON.stringify(this.props.followUp)}</p>
          <div className="buttonContainer">
            <button className="DeleteButton" name="delete" onClick={()=>{ this.props.reference.remove(); this.props.handleDeselect() }} >
              Delete
            </button>
            {/* <button name="edit"onClick={() => this.setState({ editable: true })} >
            Edit
            </button> */}
            <button className="BackButton" name="deselect" onClick={this.props.handleDeselect}>
              Back
            </button>
          </div>
        </article>
      );
    }

    if (this.state.editable === true) {
      return (
        <CreateContact {...this.props} />
      )
    }
  }
}
