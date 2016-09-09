import React, { Component } from 'react';
import firebase from '../firebase';


export default function ({firstName, lastName, photo, company}) {
  return (
    <article className="ShortContact" onClick={() => {
        console.log('hello casey');}
      }>
      <p>{photo}</p>
      <p>{firstName} {lastName}</p>
      <p>Company: {company}</p>
    </article>
  );
}
