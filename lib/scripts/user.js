const Contact = require('./contact');

class User {
 constructor(options) {
   this.photo = options.photo;
   this.firstName = options.firstName;
   this.lastName = options.lastName;
   this.contacts = [];
 }

 addContacts(options) {
   var contact = new Contact(options);
   this.contacts.push(contact);
 }

 deleteContacts(i) {
   this.contacts.splice(i, 1);
 }

}

module.exports = User;
