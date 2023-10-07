import { useEffect, useState } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Section } from "./Section/Section";

const CONTACTS_LIST = 'contacts';

export const App = () => {

  const [contacts, setContacts] = useState(() => {

    const data = JSON.parse(localStorage.getItem(CONTACTS_LIST));
    if (data) {
      return [...data];
    } else {
      return [
        { name: 'Rosie Simpson', number: '459-12-56' },
        { name: 'Hermione Kline', number: '443-89-12' },
        { name: 'Eden Clements', number: '645-17-79' },
        { name: 'Annie Copeland', number: '227-91-26' },
      ];
    }
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACTS_LIST, JSON.stringify(contacts));
  }, [contacts]);

  const saveContact = data => {
    setContacts(prevContacts => {
      if(prevContacts.some(contact => contact.name === data.name)){
        alert(`${data.name} is already in contacts.`);
        return [...prevContacts];
      }
      return [...prevContacts, { ...data }];
    });
  };

  const deleteContact = id => {
    const data = contacts.filter(contact => contact.id !== id);
    setContacts([...data]);
  };

  const onFilter = event => {
    setFilter(event.currentTarget.value);
  };


  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={saveContact}/>
      </Section>

      <Section title="Contacts">
          <Filter filter={filter}
          onFilter={onFilter} />
        
        <ContactList contacts={filteredContacts} handleDelete={deleteContact} />
      </Section>
    </>
  );
};
