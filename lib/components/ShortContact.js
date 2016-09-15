import React, { Component } from 'react';
import firebase from '../firebase';


export default class ShortContact extends Component {
  constructor(props) {
    super();
  }

  updateProperty(property, value) {
    if (value === true) {
      return this.props.updateFunction(property, false);
    }
    if (value === false) {
      return this.props.updateFunction(property, true);
    }
  }

  followUpClass(boolean) {
    if (boolean) {
      return "followUpActive";
    }
    if (!boolean) {
      return "followUpNotActive";
    }
  }


  render() {
    return (
      <article
        className={this.followUpClass(this.props.followUp)}>
        <div className="ShortText" onClick={this.props.handleClick}>
          <p className="firstName blockInlineBlock">{this.props.firstName} {this.props.lastName} </p>
          <p className="Company blockInlineBlock"><span>Company: </span> {this.props.company}</p>
        </div>
        <div aria-label="FollowUpButton" className="followUpToggle">
        <button className="followUpMessage" onClick={() => this.updateProperty('followUp', this.props.followUp)}>
          FollowUp
        </button>
        <button aria-label="FollowUpButton" className="followUpIcon" name="Follow Up" value={this.props.followUp}
        >
        </button>
        </div>
      </article>
    );
  }
}
