import React, { Component } from 'react';
import firebase from '../firebase';

export default class CreateContact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      company: '',
      jobTitle: '',
      phone: '',
      email: '',
      twitter: '',
      gitHub: '',
      website: '',
      linkedIn: '',
      category: ''
    };
  }

  createContact(e) {
    e.preventDefault();

    const { reference } = this.props;
    const { firstName, lastName, company, jobTitle, phone,
    email, twitter, gitHub, website, linkedIn, category} = this.state;

    reference.push({ firstName , lastName , company , jobTitle , phone ,
    email , twitter , gitHub , website, linkedIn , category });
    this.setState({ firstName: '', lastName: '' , company: '', jobTitle: '', phone: '',
    email: '', twitter: '', gitHub: '', website: '', linkedIn: '', category: ''
    });
  }

  render() {
    return (
      <form className="CreateContact" onSubmit={this.createContact.bind(this)}>
        <input
          placeholder="first name"
          value={this.state.firstName}
          onChange={(e) => this.setState({ firstName: e.target.value })}
        />
        <input
          placeholder="last name"
          value={this.state.lastName}
          onChange={(e) => this.setState({ lastName: e.target.value })}
        />
        <input
          placeholder="company"
          value={this.state.company}
          onChange={(e) => this.setState({ company: e.target.value })}
        />
        <input
          placeholder="job title"
          value={this.state.jobTitle}
          onChange={(e) => this.setState({ jobTitle: e.target.value })}
        />
        <input
          placeholder="phone"
          value={this.state.phone}
          onChange={(e) => this.setState({ phone: e.target.value })}
        />
        <input
          placeholder="email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <input
          placeholder="website"
          value={this.state.website}
          onChange={(e) => this.setState({ website: e.target.value })}
        />
        <input
          placeholder="twitter"
          value={this.state.twitter}
          onChange={(e) => this.setState({ twitter: e.target.value })}
        />
        <input
          placeholder="gitHub"
          value={this.state.gitHub}
          onChange={(e) => this.setState({ gitHub: e.target.value })}
        />
        <input
          placeholder="linkedIn"
          value={this.state.linkedIn}
          onChange={(e) => this.setState({ linkedIn: e.target.value })}
        />
        <input
          placeholder="category"
          value={this.state.category}
          onChange={(e) => this.setState({ category: e.target.value })}
        />
        <input type="submit" value="Create Contact" />
      </form>
    );
  }
}
