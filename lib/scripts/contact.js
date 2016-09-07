const Note = require('./note');

class Contact {
 constructor(options) {
  this.photo = options.photo || null;
  this.firstName = options.firstName;
  this.lastName = options.lastName;
  this.company = options.company || null;
  this.jobTitle = options.jobTitle || null;
  this.email = [];
  this.phone = [];
  this.category = [];
  this.notes = [];
  this.linkedIn = options.linkedIn || null;
  this.twitter = options.twitter || null;
  this.gitHub = options.gitHub || null;
  this.followUp = options.followUp || true;
 }

 updateInfo(property, newValue) {
  this[property] = newValue;
 }

 addPhoneEmailCategory(property, newArrayItem) {
  this[property].push(newArrayItem);
 }

 addNote(content) {
  var note = new Note(content);
  this.notes.push(note);
 }

 deleteNote(i) {
  this.notes.splice(i, 1);
 }

 shortHtmlTemplate() {
  return `<ul style="border: 1px dotted black">
    <li><img src="${this.photo}" alt="User Photo"></li>
    <li>First Name: ${this.firstName}</li>
    <li>Last Name: ${this.lastName}</li>
    </ul>`;
   }

 longHtmlTemplate() {
  return `<ul style="border: 1px dotted black">
    <li>Follow up: ${this.followUp}</li>
    <li><button type="button" class="delete-button">Delete</button></li>
    <li><button type="button" class="edit-button">Edit</button></li>
    <li><img src="${this.photo}" alt="User Photo"></li>
    <li>First Name: ${this.firstName}</li>
    <li>Last Name: ${this.lastName}</li>
    <li>Company: ${this.company}</li>
    <li>Job Title: ${this.jobTitle}</li>
    <li>Email: ${this.email}</li>
    <li>Phone: ${this.phone}</li>
    <li>Category: ${this.category}</li>
    <li>Notes: ${this.notes}</li>
    <li>LinkedIn: ${this.linkedIn}</li>
    <li>Twitter: ${this.twitter}</li>
    <li>GitHub: ${this.gitHub}</li>
   </ul>`;
 }

 // renderNote() {
 //
 // }

}

module.exports = Contact;
