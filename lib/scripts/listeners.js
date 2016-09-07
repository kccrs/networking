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
let $contactList = $('.contact-list');
let $longContact = $('.full-contact');

var shortContactTemplate = (contact) => {
  return `<ul style="border: 1px dotted black" data=${contact.id}>
  <li><img src="${contact.photo}" alt="User Photo"></li>
  <li>First Name: ${contact.firstName}</li>
  <li>Last Name: ${contact.lastName}</li>
  </ul>`;
};

var longContactTemplate = (contact) => {
  return `<ul style="border: 1px dotted black" data=${contact.id}>
    <li> Follow up: ${contact.followUp}</li>
    <li><button type="button" class="delete-button">Delete</button></li>
    <li><button type="button" class="edit-button">Edit</button></li>
    <li><img src="${contact.photo}" alt="User Photo"></li>
    <li>First Name: ${contact.first}</li>
    <li>Last Name: ${contact.last}</li>
    <li>Company: ${contact.company}</li>
    <li>Job Title: ${contact.jobTitle}</li>
    <li>Email: ${contact.email}</li>
    <li>Phone: ${contact.phone}</li>
    <li>Category: ${contact.category}</li>
    <li>Notes: ${contact.notes}</li>
    <ul class="social-media">
      <li>LinkedIn: ${contact.linkedIn}</li>
      <li>Twitter: ${contact.twitter}</li>
      <li>GitHub: ${contact.gitHub}</li>
    </ul>
  </ul>`;
};
// the social media ^^ can be icons with links


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
    gitHub: $github.val(),
    category: $category.val()
  });
  $longContact.prepend(user.contacts[0].longHtmlTemplate());
  setStorage();
});



$('.loadstuffs').on('click', function() {
  getStorage();
});
