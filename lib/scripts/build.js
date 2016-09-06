const Contact = require('./contact');
const Note = require('./note');
const User = require('./user');

let user = new User({firstName: 'David', lastName: 'Kerr'});

function renderPreviews() {
  if (!user.contacts) return;
  for (let i = 0; i < user.contacts.length; i++) {
    $('.contact-list').append(user.contacts[i].shortHtmlTemplate());
  }
}

module.exports = user;
