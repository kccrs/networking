'use strict'
const $ = require('jquery');
const User = require('./user');
const Contact = require('./contact');
const Note = require('./note');
const user = require('./build');


let $submitnote = $('#submit-note');

//TODO: this noteinput is returning an empty string
//with both .text and .value
let $notes = $('.notes');
let $firstName = $('.first-name');
let $lastName = $('.last-name');
let $company = $('.company');
let $jobTitle = $('.job-title');
let $email = $('.email');
let $phone = $('.phone');
let $noteinput = $('.new-note');
let $linkedIn = $('.linked-in');
let $twitter = $('.twitter');
let $github = $('.github');
let $category = $('.category');
let $save = $('#save-button');
let $edit = $('#edit-button');

var shortContactTemplate = (photo, first, last) => {
  return `<ul>
  <li> photo:${photo}</li>
  <li> First Name: ${first}</li>
  <li> Last Name: ${last}</li>
  </ul>`;
};

var setStorage = () => {
  localStorage.setItem('contacts', JSON.stringify(user.contacts));
};

var getStorage = () => {
  let contacts = JSON.parse(localStorage.getItem('contacts'));
  if (contacts) {
    for (var i = 0; i < contacts.length; i++) {
      let preview = shortContactTemplate(
        contacts[i].photo,contacts[i].firstName,contacts[i].lastName
      );
      $('.contact-list').append(preview);
    }
  }
};

getStorage();

// $submitnote.on('click', function() {
//   let contact = new Contact({firstName: 'David', lastName: 'Kerr'});
//   let content = $('.new-note').val();
//   contact.addNote(content);
//   $notes.prepend(contact.notes[0].shortHtmlTemplate());
// });

$save.on('click', function() {
  user.addContacts({
    firstName: $firstName.val(),
    lastName: $lastName.val(),
    company: $company.val(),
    jobTitle: $jobTitle.val(),
    email: $email.val(),
    phone: $phone.val(),
    noteinput: $noteinput.val(),
    linkedIn: $linkedIn.val(),
    twitter: $twitter.val(),
    github: $github.val(),
    category: $category.val()
  });
  $notes.prepend(user.contacts[0].shortHtmlTemplate());
  setStorage();
});

$('.loadstuffs').on('click', function() {
  debugger;
  getStorage();

});
