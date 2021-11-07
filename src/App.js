import React, { Component } from 'react';
import Section from './components/Section';
import Form from './components/Form';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  formSubmithandle = data => {
    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, data],
      };
    });
    // if (name === '') {
    //   alert(`please wrigth the name from contacts`);
    //   return;
    // }
    // if (number === '') {
    //   alert(`please wrigth the name fron number`);
    // }
  };
  visibleContacts = () => {
    const { filter, contacts } = this.state;
    console.log(contacts);
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmithandle} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={this.visibleContacts()}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
export default App;
