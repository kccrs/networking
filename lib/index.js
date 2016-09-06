require('./styles/styles');
const Contact = require('./scripts/contact');
require('./scripts/note');
const User = require('./scripts/user');
require('./scripts/listeners');

//TODO: get user profile from storage
//TODO: render user profile
//TODO: render user contacts


// new user = new User()

// Firebase test
const firebase = require('./firebase');
const validateInputFields = require('./validate-input-fields');
const renderSnippet = require('./render-snippet');
const {
  $snippetsSection,
  $newSnippetForm,
  $newSnippetTitle,
  $newSnippetCode,
  $newSnippetSubmit,
  $signInButton,
  $userInfo
} = require('./elements');
const provider = new firebase.auth.GoogleAuthProvider();

$newSnippetTitle.on('keyup', validateInputFields);
$newSnippetCode.on('keyup', validateInputFields);

$newSnippetForm.on('submit', (e) => {
  e.preventDefault();

  const title = $newSnippetTitle.val();
  const code = $newSnippetCode.text();

  $snippetsSection.append(renderSnippet(title, code));

  $newSnippetTitle.val('');
  $newSnippetCode.val('');
});
