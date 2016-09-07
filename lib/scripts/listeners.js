'use strict';
const $ = require('jquery');
const User = require('./user');
const Contact = require('./contact');
const Note = require('./note');
const user = require('./build');
const {
  shortContactTemplate,
  longContactTemplate,
  notesTemplate
} = require('./templates');

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
let $contactInfo = $('.contact-info');
let $contactList = $('.contact-list');
let $longContact = $('.full-contact');
// the social media ^^ can be icons with links

var disableSaveButton = () => {
  $save.prop('disabled', true);
};

var enableSaveButton = () => {
    $save.prop('disabled', false);
};

$contactInfo.on('keyup', function() {
  if($firstName.val() && $lastName.val()) {
    enableSaveButton();
  }
});

var disableEditButton = () => {
  $edit.prop('disabled', true);
};

var enableEditButton = () => {
  $edit.prop('disabled', false);
};

var clearInputFields = () => {
  $firstName.val('');
  $lastName.val('');
  $company.val('');
  $jobTitle.val('');
  $email.val('');
  $phone.val('');
  $noteinput.val('');
  $linkedIn.val('');
  $twitter.val('');
  $github.val('');
  $category.val('');
};

var setStorage = () => {
  localStorage.setItem('contacts', JSON.stringify(user.contacts));
};

var getStorage = () => {
  let contacts = JSON.parse(localStorage.getItem('contacts'));
  if (contacts) {
    for (var i = 0; i < contacts.length; i++) {
      let preview = shortContactTemplate(contacts[i]);
      let fullView = longContactTemplate(contacts[i]);
      $contactList.append(preview);
      // $longContact.append(fullView);
    }
  }
};

// $submitnote.on('click', function() {
//   let contact = new Contact({firstName: 'David', lastName: 'Kerr'});
//   let content = $('.new-note').val();
//   contact.addNote(content);
//   $notes.prepend(contact.notes[0].shortHtmlTemplate());
// });

$save.on('click', function() {
  let contact = {
    firstName: $firstName.val(),
    lastName: $lastName.val(),
    company: $company.val(),
    jobTitle: $jobTitle.val(),
    email: $email.val(),
    phone: $phone.val(),
    noteinput: $noteinput.val(),
    linkedIn: $linkedIn.val(),
    twitter: $twitter.val(),
    gitHub: $github.val(),
    category: $category.val()
    };
  // $notes.prepend(user.contacts[0].shortHtmlTemplate());
  user.addContacts(contact);
  $longContact.prepend(longContactTemplate(contact));
  setStorage();
  clearInputFields();
  disableSaveButton();
});

$(document).ready(function() {
    getStorage();
    // TODO: add render function for home.html
});
