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

var shortContactTemplate = (photo, first, last) => {
  return `<ul style="border: 1px dotted black">
  <li><img src="${photo}" alt="User Photo"></li>
  <li>First Name: ${first}</li>
  <li>Last Name: ${last}</li>
  </ul>`;
};

var longContactTemplate = (photo, first, last, company, jobTitle, email, phone, category, notes, linkedIn, twitter, gitHub, followUp) => {
  return `<ul style="border: 1px dotted black">
    <li> Follow up: ${followUp}</li>
    <li><button type="button" class="delete-button">Delete</button></li>
    <li><button type="button" class="edit-button">Edit</button></li>
    <li><img src="${photo}" alt="User Photo"></li>
    <li>First Name: ${first}</li>
    <li>Last Name: ${last}</li>
    <li>Company: ${company}</li>
    <li>Job Title: ${jobTitle}</li>
    <li>Email: ${email}</li>
    <li>Phone: ${phone}</li>
    <li>Category: ${category}</li>
    <li>Notes: ${notes}</li>
    <ul class="social-media">
      <li>LinkedIn: ${linkedIn}</li>
      <li>Twitter: ${twitter}</li>
      <li>GitHub: ${gitHub}</li>
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
      let preview = shortContactTemplate(
        contacts[i].photo,contacts[i].firstName,contacts[i].lastName
      );
      let fullView = longContactTemplate(
        contacts[i].photo,contacts[i].firstName,contacts[i].lastName,contacts[i].company,contacts[i].jobTitle,contacts[i].email,contacts[i].phone,contacts[i].category,contacts[i].notes,contacts[i].linkedIn,contacts[i].twitter,contacts[i].gitHub
      );
      $contactList.append(preview);
      // $longContact.append(fullView);
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
    gitHub: $github.val(),
    category: $category.val()
  });
  $longContact.prepend(user.contacts[0].longHtmlTemplate());
  setStorage();
});



$('.loadstuffs').on('click', function() {
  getStorage();

});
