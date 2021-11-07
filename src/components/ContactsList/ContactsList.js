import React from 'react';
export default function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span> {name}:</span>
          <span>{number}</span>
          <button type="button" onClick={() => onDeleteContact()}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
