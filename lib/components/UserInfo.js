import React from 'react';
import firebase from '../firebase';
const $ = require('jquery');

export default function ({ user }) {
  return (
    <header className="UserInfo">
      <button className="AddNewContact" onClick={() => {
          $('form').toggleClass('display')
          $('.ShortContact').toggleClass('display')
          $('.AddNewContact').toggleClass('display')
          $('.FollowUp').toggleClass('display')
          $('.BackButton').toggleClass('display')
        }
      }>
      <img src='../assets/plus-circle-white.svg'/>
    </button>
    <button className="BackButton display" onClick={() => {
        $('form').toggleClass('display')
        $('.ShortContact').toggleClass('display')
        $('.AddNewContact').toggleClass('display')
        $('.FollowUp').toggleClass('display')
        $('.BackButton').toggleClass('display')
      }
    }>
    Back
  </button>
  <button className="FollowUp" onClick={() => firebase.auth().signOut()}>
    Follow Up
  </button>
  
  <div className="UserInfo--photograph">
    <img className="userPhoto"
      src={user.photoURL}
      alt={`${user.displayName} Photograph`}
      />
  </div>
  <button className="UserInfo--signOut" onClick={() => firebase.auth().signOut()}>
    Sign Out
  </button>
</header>
);
}
