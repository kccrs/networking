import React from 'react';
import firebase from '../firebase';

export default function ({ user }) {
  return (
    <header className="UserInfo">
      <div className="UserInfo--photograph">
        <img
          src={user.photoURL}
          alt={`${user.displayName} Photograph`}
        />
      </div>
      <div className="UserInfo--biography">
        <div className="UserInfo--displayName">{user.displayName}</div>
        <div className="UserInfo--email">{user.email}</div>
      </div>
        <button className="AddNewContact" onClick={() => firebase.auth().signOut()}>
        <img src='../lib/styles/addcontact.svg'/>
        </button>
        <button className="FollowUp" onClick={() => firebase.auth().signOut()}>
          Follow Up
        </button>
        <button className="UserInfo--signOut" onClick={() => firebase.auth().signOut()}>
        Sign Out
        </button>
    </header>
  );
}
