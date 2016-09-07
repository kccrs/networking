const firebase = require('firebase');

var config = {
  apiKey: "AIzaSyBA7TgbDpZI7LHJsYineLMnzNKfmkiQNKc",
  authDomain: "networking-app-5df06.firebaseapp.com",
  databaseURL: "https://networking-app-5df06.firebaseio.com",
  storageBucket: "networking-app-5df06.appspot.com",
};


firebase.initializeApp(config);

export default firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
