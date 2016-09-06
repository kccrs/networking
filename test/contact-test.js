/* globals describe, it*/

const assert = require('chai').assert;
const Contact = require('../lib/scripts/contact');

describe('contact constructor', function () {
  it('constructor should create new contact which should be an object', function () {
    let contact = new Contact ({firstName: 'David', lastName: 'Kerr'});
    assert.isObject(contact, 'contact is not an object');
  });
  it('has default null values for photo, compnay, jobTitle, and social media links', function () {
    let contact = new Contact ({firstName: 'David', lastName: 'Kerr', company: 'Turing'});
    assert.equal(contact.firstName, 'David');
    assert.equal(contact.lastName, 'Kerr');
    assert.equal(contact.photo, null);
    assert.equal(contact.company, 'Turing');
    assert.equal(contact.jobTitle, null);
    assert.equal(contact.linkedIn, null);
    assert.equal(contact.twitter, null);
    assert.equal(contact.gitHub, null);
    assert.equal(contact.followUp, true);
  });
  it('should have function updateInfo which updates a given property to a given value', function () {
    let contact = new Contact ({firstName: 'David', lastName: 'Kerr', company: 'Turing'});
    contact.updateInfo('firstName', 'Lebron');
    contact.updateInfo('lastName', 'James');
    assert.equal(contact.firstName, 'Lebron');
    assert.equal(contact.lastName, 'James');
  });
  it('should be able to add items to properties which are arrays', function () {
    let contact = new Contact ({firstName: 'David', lastName: 'Kerr', company: 'Turing'});
    contact.addPhoneEmailCategory('email', 'kerrd89@gmail.com');
    contact.addPhoneEmailCategory('email', 'blahblah@gmail.com');
    contact.addPhoneEmailCategory('phone', 6145583850);
    contact.addPhoneEmailCategory('phone', 5555555555);
    contact.addPhoneEmailCategory('category', 'Design');
    contact.addPhoneEmailCategory('category', 'Job Lead');
    assert.deepEqual(contact.email, [ 'kerrd89@gmail.com' , 'blahblah@gmail.com' ]);
    assert.deepEqual(contact.phone, [ 6145583850 , 5555555555 ]);
    assert.deepEqual(contact.category, [ 'Design' , 'Job Lead' ]);
  });
  it('should hav  e a function to add an object note to its note property', function() {
    let contact = new Contact ({firstName: 'David', lastName: 'Kerr', company: 'Turing'});
    contact.addNote('follow-up after Turing is over');
    assert.equal(contact.notes[0].content, 'follow-up after Turing is over');
  });
  it('should have a function to remove a specific note', function() {
    let contact = new Contact ({firstName: 'David', lastName: 'Kerr', company: 'Turing'});
    contact.addNote('1');
    contact.addNote('2');
    contact.addNote('3');
    //should delete the note with content of '2'
    contact.deleteNote(1);
    assert.equal(contact.notes[0].content, '1');
    assert.equal(contact.notes[1].content, '3');
  });
});
