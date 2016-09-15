import React, { Component } from 'react';
import firebase from '../firebase';
import CreateContact from './CreateContact';
import md5 from 'md5';

export default class Contact extends Component {
  constructor(props) {
    super();
    this.state = {
      editable: false,
    };
  }

  render() {
    if (this.state.editable === false) {
      let photo = "https://www.gravatar.com/avatar/" + md5(this.props.primaryEmail);
      return (
        <article className="Contact">
          <p className="name">{this.props.firstName} {this.props.lastName}</p>
          <img src={photo} className="Gravatar"/>
          <p><span>Company: </span> {this.props.company}</p>
          <p><span>Job Title: </span> {this.props.jobTitle}</p>
          <p><span>Primary Phone: </span><br/> {this.props.primaryPhone}</p>
          <p><span>Secondary Phone: </span><br/> {this.props.secondaryPhone}</p>
          <p><span>Primary Email: </span> {this.props.primaryEmail}</p>
          <p><span>Secondary Email: </span> {this.props.secondaryEmail}</p>
          <ul className="SocialMedia">
            <li><span>Website: </span><br/> {this.props.website}</li>
            <li><span>GitHub: </span> {this.props.gitHub}</li>
            <li><span>Twitter: </span> {this.props.twitter}</li>
            <li><span>LinkedIn: </span> {this.props.linkedIn}</li>
          </ul>
          <p><span>Category: </span><br/> {this.props.category}</p>
          <p><span>Notes: </span><br/> {this.props.notes}</p>
          <p><span>Follow Up: </span> {JSON.stringify(this.props.followUp)}</p>
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
