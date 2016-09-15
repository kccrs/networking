import React from 'react';
import firebase, { provider } from '../firebase';

export default function () {
  console.log(provider);
  return (
    <div className="SignIn">
      <button className="buttonSignIn" onClick={() => firebase.auth().signInWithPopup(provider)}>
        Sign In
      </button>
    </div>
  );
}
