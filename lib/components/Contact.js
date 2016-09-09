import React, { Component } from 'react';
import firebase from '../firebase';


export default function ({firstName, lastName, photo, company, jobTitle, phone,
email, twitter, gitHub, website, linkedIn, category, notes, reference}) {
  return (
    <article className="Contact">
      <p>{firstName} {lastName}</p>
      <p>{photo}</p>
      <p>Company: {company} Title: {jobTitle}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <ul>
        <li>Website: {website}</li>
        <li>GitHub: {gitHub}</li>
        <li>Twitter: {twitter}</li>
        <li>LinkedIn: {linkedIn}</li>
      </ul>
      <p>Category: {category}</p>
      <p>Notes: {notes}</p>

      <button name="delete" onClick={() => reference.remove()} >
        Delete
      </button>

      <button name="edit"onClick={() => reference.update({firstName: 'Casey'})} >
        Edit
      </button>
    </article>
  );
}
