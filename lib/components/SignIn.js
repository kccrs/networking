import React from 'react';
import firebase, { provider } from '../firebase';

export default function () {
  return (
    <div className="SignIn">
      <button onClick={() => firebase.auth().signInWithPopup(provider)}>
        Sign In
      </button>
    </div>
  );
}
