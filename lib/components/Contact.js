import React, { Component } from 'react';
import firebase from '../firebase';
import CreateContact from './CreateContact';
import md5 from 'md5';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
  }

  toggleEditable() {
    if(this.state.editable === true) {this.state.editable = false;}
    if(this.state.editable === false) {this.state.editable = true;}
  }

  render() {
    if (this.state.editable === false) {
      let photo = "https://www.gravatar.com/avatar/" + md5(this.props.primaryEmail);

      return (
        <article className="Contact">
          <p className="Gravatar">{photo}</p>
          <p className="name">
            {this.props.firstName} {this.props.lastName}
          </p>
          <img alt="Contact Profile Photo"src={photo} className="Gravatar"/>
          <p>
            <span>Company: </span> {this.props.company}
          </p>
          <p>
            <span>Job Title: </span> {this.props.jobTitle}
          </p>
          <p className="blockInlineBlock">
            <span className="blockInlineBlock">Primary Phone: </span> {this.props.primaryPhone}
          </p>
          <p className="blockInlineBlock">
            <span className="blockInlineBlock">Secondary Phone: </span> {this.props.secondaryPhone}
          </p>
          <p className="blockInlineBlock">
            <span className="blockInlineBlock">Primary Email: </span> {this.props.primaryEmail}
          </p>
          <p className="blockInlineBlock">
            <span className="blockInlineBlock">Secondary Email: </span> {this.props.secondaryEmail}
          </p>
          <ul className="SocialMedia">
            <li className="blockInlineBlock">
              <span className="blockInlineBlock">Website: </span> {this.props.website}
            </li>
            <li><span>GitHub: </span> {this.props.gitHub}</li>
            <li><span>Twitter: </span> {this.props.twitter}</li>
            <li><span>LinkedIn: </span> {this.props.linkedIn}</li>
          </ul>
          <p className="blockInlineBlock">
            <span className="blockInlineBlock">Category: </span> {this.props.category}
          </p>
          <p className="blockInlineBlock">
            <span className="blockInlineBlock">Notes: </span> {this.props.notes}
          </p>
          <p>
            <span>Follow Up: </span> {JSON.stringify(this.props.followUp)}
          </p>
          <div className="buttonContainer">
            <button
              className="DeleteButton"
              name="delete"
              onClick={()=>{ this.props.reference.remove(); this.props.handleDeselect() }}
            >
              Delete
            </button>
            <button
              className="EditButton"
              name="edit"
              onClick={() => this.setState({ editable: true })}
            >
              Edit
            </button>
            <button
              className="BackButton"
              name="deselect"
              onClick={this.props.handleDeselect}
            >
              Back
            </button>
          </div>
        </article>
      );
    }

    if (this.state.editable === true) {
      return (
        <CreateContact {...this.props}
          updateFunction={this.props.updateRecord}
          toggleEditable={this.state.toggleEditable}
        />
      )
    }
  }
}
