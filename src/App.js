import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addAppointment = (title, contact, date, time) => {
    setAppointments([
      ...appointments,
      {
        title: title,
        contact: contact,
        date: date,
        time: time,
      },
    ]);
  };

  const addContact = (name, phone, email) => {
    setContacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email,
      },
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
              contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
