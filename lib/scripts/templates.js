'use strict'


var shortContactTemplate = (contact) => {
  return `<ul data=${contact.id}>
  <li> photo:${contact.photo}</li>
  <li> First Name: ${contact.firstName}</li>
  <li> Last Name: ${contact.lastName}</li>
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

var notesTemplate = (note) => {
  return `<p data=${note.id}>${note.content}
  <span>${note.time}</span>
  </p>`;
};

module.exports = {
  shortContactTemplate: shortContactTemplate,
  longContactTemplate: longContactTemplate,
  notesTemplate: notesTemplate
};
