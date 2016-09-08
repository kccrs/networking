import React, { Component } from 'react';
import firebase from '../firebase';


export default function ({firstName,lastName,company,jobTitle,phone,
email,twitter,gitHub,website,linkedIn,category,reference}) {
    return (
      <article className="Contact">
        <p>{firstName} {lastName}</p>
        <p>Company - Title: {company} - {jobTitle}</p>
        <p>Phone:{phone}</p>
        <p>Email:{email}</p>
        <ul>
          <li>Website:{website}</li>
          <li>GitHub:{gitHub}</li>
          <li>Twitter:{twitter}</li>
          <li>LinkedIn:{linkedIn}</li>
        </ul>


        <button onClick={() => reference.remove()} >
          Delete
        </button>

        <button onClick={() => reference.update({firstName: 'Casey'})} >
          Edit
        </button>
      </article>
    );
}
