import React, { Component } from 'react';
import firebase from '../firebase';

export default class CreateContact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      photo: '',
      company: '',
      jobTitle: '',
      phone: [],
      email: '',
      twitter: '',
      gitHub: '',
      website: '',
      linkedIn: '',
      category: '',
      notes: '',
      followUp: true,
    };
  }

  createContact(e) {
    e.preventDefault();

    const { reference } = this.props;
    const { firstName, lastName, photo, company, jobTitle, phone,
    email, twitter, gitHub, website, linkedIn, category,
    notes, followUp} = this.state;

    reference.push({ firstName, lastName, photo, company, jobTitle, phone,
    email, twitter, gitHub, website, linkedIn, category, notes, followUp });

    // reference.push(...this.state);
    this.setState({ firstName: '', lastName: '' , photo: '', company: '', jobTitle: '', phone: [],
    email: '', twitter: '', gitHub: '', website: '', linkedIn: '', category: '', notes: '', followUp: ''

    });
  }

  inputWithLabel(property, label, value) {
    return (
      <label>
      {label}
      <input type="text" name={property}
        value={this.state[property]}
        onChange={(e) => this.setState({ property: e.target.value })}
        />
    </label>
  )};

  // enableSaveButton() {
  //   if (document.querySelector('.FirstName').value && document.querySelector('.LastName').value ) {
  //     return false
  //   }
  //   else {
  //     return true
  //   }
  // }

  render() {
    return (
      <form name="create-contact" className="CreateContact display" onSubmit={this.createContact.bind(this)}>
        <label>
          First Name
          <input type="text" name="first-name"
            value={this.state.firstName} required placeholder="required"
            onChange={(e) => this.setState({ firstName: e.target.value })}
            />
        </label>
        <label>
          Last Name
          <input type="text" name="last-name"
            value={this.state.lastName} required placeholder="required"
            onChange={(e) => this.setState({ lastName: e.target.value })}
            />
        </label>
        <label>
          Photo
          <input type="image" name="photo"
            value={this.state.photo}
            onChange={(e) => this.setState({ photo: e.target.value })}
            />
        </label>
        <label>
          Company
          <input type="text" name="company"
            value={this.state.company}
            onChange={(e) => this.setState({ company: e.target.value })}
            />
        </label>
        <label>
          Job Title
          <input type="text" name="job-title"
            value={this.state.jobTitle}
            onChange={(e) => this.setState({ jobTitle: e.target.value })}
            />
        </label>
        <label>
          Phone number
          <input type="tel" name="phone"
            value={this.state.phone[0]}
            onChange={(e) => this.state.phone.push(e.target.value)}
            />
        </label>
        <label>
          Email
          <input type="email" name="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            />
        </label>
        <label>
          Website
          <input type="text" name="website"
            value={this.state.website}
            onChange={(e) => this.setState({ website: e.target.value })}
            />
        </label>
        <label>
          Twitter
          <input type="text" name="twitter"
            value={this.state.twitter}
            onChange={(e) => this.setState({ twitter: e.target.value })}
            />
        </label>
        <label>
          GitHub
          <input type="text" name="github"
            value={this.state.gitHub}
            onChange={(e) => this.setState({ gitHub: e.target.value })}
            />
        </label>
        <label>
          LinkedIn
          <input type="text" name="linked-in"
            value={this.state.linkedIn}
            onChange={(e) => this.setState({ linkedIn: e.target.value })}
            />
        </label>
        <label>
          Category
          <input type="text" name="category"
            value={this.state.category}
            onChange={(e) => this.setState({ category: e.target.value })}
            />
        </label>
        <label>
          Notes:
          <textarea name="notes"
            value={this.state.notes}
            onChange={(e) => this.setState({ notes: e.target.value })}>
          </textarea>
        </label>
        <label>Follow Up
        <input type="checkbox" name="followUp" value="true" />
        </label>

        <input className="SaveButton" type="submit" name="saveContact" value="Save" />
      </form>
    );
  }
}

 // disabled={!this.state.firstName}
