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
  return `<ul>
     <li> photo:${this.photo}</li>
     <li> First Name: ${this.firstName}</li>
     <li> Last Name: ${this.lastName}</li>
     </ul>`;
   }

 longHtmlTemplate() {
  return `<ul>
     <li>${this.photo}</li>
     <li>${this.firstName}</li>
     <li>${this.lastName}</li>
     <li>${this.company}</li>
     <li>${this.jobTitle}</li>
     <li>${this.email}</li>
     <li>${this.phone}</li>
     <li>${this.category}</li>
     <li>${this.notes}</li>
     <li>${this.linkedIn}</li>
     <li>${this.twitter}</li>
     <li>${this.gitHub}</li>
     <li>${this.followUp}</li>
   </ul>`;
 }

 // renderNote() {
 //
 // }

}

module.exports = Contact;
