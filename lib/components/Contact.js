import React, { Component } from 'react';
import firebase from '../firebase';

export default function ({ firstName , lastName , reference }) {
    return (
      <article className="Contact">
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>
        <button onClick={() => reference.remove()} >
          Delete
        </button>
      </article>
    );
}
