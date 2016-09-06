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

 addNote(text) {
   var note = new Note(text);
   this.notes.push(note);
 }

 deleteNote(i) {
   this.notes.splice(i, 1);
 }

 // renderNote() {
 //
 // }

}

module.exports = Contact;
