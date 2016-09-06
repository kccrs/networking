const $ = require('jquery');
const User = require('./user');
const Contact = require('./contact');
const Note = require('./note');

let $submitnote = $('#submit-note');

//TODO: this noteinput is returning an empty string
//with both .text and .value
let $noteinput = $('.new-note');

$submitnote.on('click', function() {
  let contact = new Contact({firstName: 'David', lastName: 'Kerr'});
  let content = $('.new-note').val();
  contact.addNote(content);
  $('.notes').prepend(contact.notes[0].shortHtmlTemplate());
});
