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

function pageLoad() {

}

var setStorage = () => {
  localStorage.setItem('contacts', JSON.stringify(user.contacts));
};

var getStorage = () => {
  let contacts = JSON.parse(localStorage.getItem('contacts'));
  if (contacts) {
    for (var i = 0; i < contacts.length; i++) {
      let preview = shortContactTemplate(contacts[i]);
      $('.contact-list').append(preview);
    }
  }
};

module.exports = {
  user,
  pageLoad,
  setStorage,
  getStorage,
};
