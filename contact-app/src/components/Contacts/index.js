import React from "react";
import List from "./List";
import Form from "./Form";
import { useState, useEffect } from "react";
import './styles.css'

function Contacts() {
  const [contacts, SetContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: "5555555555",
    },
    {
        fullname: "Resul",
        phone_number: "5555555555",
      },
      {
        fullname: "Kamil",
        phone_number: "5555555555",
      },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
        <h1>Kişiler</h1>
      <List contacts={contacts} />
      <Form addContact={SetContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
