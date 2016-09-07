import React, { Component } from 'react';
import firebase from '../firebase';

export default function ({ title, reference }) {
    return (
      <article className="Contact">
        <h3>{title}</h3>
        <button onClick={() => reference.remove()} >
          Delete
        </button>
      </article>
    );
}
