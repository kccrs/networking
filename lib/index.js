require('./styles/styles');
require('./scripts/note');
require('./scripts/build');
require('./scripts/listeners');
const Contact = require('./scripts/contact');
const User = require('./scripts/user');
const firebase = require('./firebase');
// const validateInputFields = require('./validate-input-fields');
// const renderSnippet = require('./render-snippet');

//TODO: create a user
//TODO: use that user to create contacts
//TODO: get user profile from storage
//TODO: render user profile
//TODO: render user contacts

// Firebase test
// const {
//   $snippetsSection,
//   $newSnippetForm,
//   $newSnippetTitle,
//   $newSnippetCode,
//   $newSnippetSubmit,
//   $signInButton,
//   $userInfo
// } = require('./elements');
// const provider = new firebase.auth.GoogleAuthProvider();
//
// $newSnippetTitle.on('keyup', validateInputFields);
// $newSnippetCode.on('keyup', validateInputFields);
//
// $newSnippetForm.on('submit', (e) => {
//   e.preventDefault();
//
//   const title = $newSnippetTitle.val();
//   const code = $newSnippetCode.text();
//
//   $snippetsSection.append(renderSnippet(title, code));
//
//   $newSnippetTitle.val('');
//   $newSnippetCode.val('');
// });
