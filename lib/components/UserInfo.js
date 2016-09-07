import React from 'react';
import firebase from '../firebase';

export default function ({ user }) {
  return (
    <section className="UserInfo">
      <div className="UserInfo--photograph">
        <img
          src={user.photoURL}
          alt={`${user.displayName} Photograph`}
        />
      </div>
      <div className="UserInfo--biography">
        <div className="UserInfo--displayName">{user.displayName}</div>
        <div className="UserInfo--email">{user.email}</div>
        <button className="UserInfo--signOut" onClick={() => firebase.auth().signOut()}>
          Sign Out
        </button>
      </div>
    </section>
  );
}
