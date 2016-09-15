import React, { Component } from 'react';
import firebase from '../firebase';

function createContactTemplate(contact = {}) {
  return Object.assign({
    firstName: '',
    lastName: '',
    photo: '',
    company: '',
    jobTitle: '',
    primaryPhone: '',
    secondaryPhone: '',
    primaryEmail: '',
    secondaryEmail: '',
    twitter: '',
    gitHub: '',
    website: '',
    linkedIn: '',
    category: '',
    notes: [],
    followUp: true,
  }, contact);
}

export default class CreateContact extends Component {
  constructor({ contact = {} }) {
    super();
    this.state = {
      contact: createContactTemplate(contact)
    };
  }

  createContact(e) {
    e.preventDefault();

    this.props.reference.push(this.state.contact);

    this.setState(createContactTemplate());
    this.props.handleBackClick();
  }

  // inputWithLabel(property, label, value) {
  //   return (
  //     <label>
  //     {label}
  //     <input type="text" name={property}
  //       value={this.state[property]}
  //       onChange={(e) => this.setState({ property: e.target.value })}
  //     />
  //   </label>
  // )};

  updateProperty(e) {
    this.setState({ contact: Object.assign(this.state.contact, { [e.target.name]: e.target.value })});
  }

  render() {
    // if (!this.props.firstName) {
      return (
        <form name="create-contact"   className="CreateContact" onSubmit={this.createContact.bind(this)}>
          <h3 className="NewContact">New Contact</h3>
          <span className="divider"></span>
          <label>
            First Name:
            <input type="text" name="firstName"
              value={this.state.contact.firstName} required placeholder="required"
              onChange={(e) => this.updateProperty(e)}
            />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName"
              value={this.state.contact.lastName} required placeholder="required"
              onChange={(e) => this.updateProperty(e)}
            />
          </label>
          <label>
            Company:
            <input type="text" name="company"
              value={this.state.contact.company}
              onChange={(e) => this.updateProperty(e)}
            />
          </label>
          <label>
            Job Title:
            <input type="text" name="jobTitle"
              value={this.state.contact.jobTitle}
              onChange={(e) => this.updateProperty(e)}
            />
          </label>
          <span className="divider"></span>
          <label>
            Primary phone number: <br/>
            <input  className="LongLabel" type="tel" name="primaryPhone"
              value={this.state.contact.primaryPhone}
              onChange={(e) => this.updateProperty(e)}
            />
          </label>
          <label>
            Secondary phone number: <br/>
            <input  className="LongLabel" type="tel" name="secondaryPhone"
              value={this.state.contact.secondaryPhone}
              onChange={(e) => this.updateProperty(e)}
            />
          </label>
          <label>
            Primary Email: <br/>
            <input  className="LongLabel" type="email" name="primaryEmail"
              value={this.state.contact.primaryEmail}
              onChange={(e) => this.updateProperty(e)}
            />
          </label>
          <label>
            Secondary Email: <br/>
            <input  className="LongLabel" type="email" name="secondaryEmail"
              value={this.state.contact.secondaryEmail}
              onChange={(e) => this.updateProperty(e)}
            />
          </label>
          <span className="divider"></span>
          <label>
            Website:
            <input type="text" name="website"
              value={this.state.contact.website}
              onChange={(e) => this.updateProperty(e)}
            />
          </label>
          <label>
            Twitter:
            <input type="text" name="twitter"
              value={this.state.contact.twitter}
              onChange={(e) => this.updateProperty(e)}
            />
          </label>
          <label>
            GitHub:
            <input type="text" name="gitHub"
              value={this.state.contact.gitHub}
              onChange={(e) => this.updateProperty(e)}
            />
          </label>
          <label>
            LinkedIn:
            <input type="text" name="linkedIn"
              value={this.state.contact.linkedIn}
              onChange={(e) => this.updateProperty(e)}
            />
          </label>
          <label>
            Category:
            <input type="text" name="category"
              value={this.state.contact.category}
              onChange={(e) => this.updateProperty(e)}
            />
          </label>
          <span className="divider"></span>
          <label>
            Notes:
            <textarea name="notes"
              value={this.state.contact.notes}
              onChange={(e) => this.updateProperty(e)}>
            </textarea>
          </label>
          <div className="buttonDiv">
            <input className="SaveButton" type="submit" name="submit" value="Save" />
            <button className="CancelButton" onClick={() => this.props.handleBackClick()}>
            Cancel
            </button>
          </div>
        </form>
      );
    // }
  }
}
  //   if (this.props.firstName) {
  //     return (
  //       <form name="create-contact" className="CreateContact display" onSubmit={this.createContact.bind(this)}>
  //         <h3>New Contact</h3>
  //         <label>
  //           Photo
  //           <input type="image" name="photo"
  //             value={this.props.photo}
  //             onChange={(e) => this.setState({ photo: e.target.value })}
  //         />
  //         </label>
  //         <span className="divider"></span>
  //         <label>
  //           First Name
  //           <input type="text" name="firstName"
  //             value={this.props.firstName} required placeholder="required"
  //             onChange={(e) => this.updateProperty(e)}
  //           />
  //         </label>
  //         <label>
  //           Last Name
  //           <input type="text" name="lastName"
  //             value={this.props.lastName} required placeholder="required"
  //             onChange={(e) => this.updateProperty(e)}
  //           />
  //         </label>
  //         <label>
  //           Company
  //           <input type="text" name="company"
  //             value={this.props.company}
  //             onChange={(e) => this.updateProperty(e)}
  //           />
  //         </label>
  //         <span className="divider"></span>
  //         <label>
  //           Job Title
  //           <input type="text" name="jobTitle"
  //             value={this.props.jobTitle}
  //             onChange={(e) => this.updateProperty(e)}
  //           />
  //         </label>
  //         <label>
  //           Primary phone number
  //           <input type="tel" name="primaryPhone"
  //             value={this.props.primaryPhone}
  //             onChange={(e) => this.updateProperty(e)}
  //           />
  //         </label>
  //         <label>
  //           Secondary phone number
  //           <input type="tel" name="secondaryPhone"
  //             value={this.props.secondaryPhone}
  //             onChange={(e) => this.updateProperty(e)}
  //           />
  //         </label>
  //         <label>
  //           Primary Email
  //           <input type="email" name="primaryEmail"
  //             value={this.props.primaryEmail}
  //             onChange={(e) => this.updateProperty(e)}
  //           />
  //           <label>
  //             Secondary Email
  //             <input type="email" name="secondaryEmail"
  //               value={this.props.secondaryEmail}
  //               onChange={(e) => this.updateArray(e)}
  //             />
  //           </label>
  //         </label>
  //         <span className="divider"></span>
  //         <label>
  //           Website
  //           <input type="text" name="website"
  //             value={this.props.website}
  //             onChange={(e) => this.updateProperty(e)}
  //           />
  //         </label>
  //         <label>
  //           Twitter
  //           <input type="text" name="twitter"
  //             value={this.props.twitter}
  //             onChange={(e) => this.updateProperty(e)}
  //           />
  //         </label>
  //         <label>
  //           GitHub
  //           <input type="text" name="github"
  //             value={this.props.gitHub}
  //             onChange={(e) => this.updateProperty(e)}
  //           />
  //         </label>
  //         <label>
  //           LinkedIn
  //           <input type="text" name="linkedIn"
  //             value={this.props.linkedIn}
  //             onChange={(e) => this.updateProperty(e)}
  //           />
  //         </label>
  //         <label>
  //           Category
  //           <input type="text" name="category"
  //             value={this.props.category}
  //             onChange={(e) => this.updateProperty(e)}
  //           />
  //         </label>
  //         <span className="divider"></span>
  //         <label>
  //           Notes:
  //           <textarea name="notes"
  //             value={this.props.notes}
  //             onChange={(e) => this.updateProperty(e)}>
  //           </textarea>
  //         </label>
  //
  //         <input className="SaveButton" type="submit" name="submit" value="Save"/>
  //       </form>
  //     )
  //   }
  // }
// }

// <label>
//   Photo
//   <input type="image" name="photo"
//     value={this.state.contact.photo}
//     onChange={(e) => this.setState({ photo: e.target.value })}
//   />
// </label>
