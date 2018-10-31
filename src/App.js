import React, { Component } from 'react';
import './App.css';
import ContactListContainer from './components/ContactListContainer';

const EmailAddressListRenderer = props => (
  <div>
    {
      props.contacts.map(contact => (
        <p key={contact.id}>Email address: {contact.email}</p>
      ))
    }
  </div>
);

class App extends Component {

  render() {
    return (
      <div className="App">
        <ContactListContainer renderer={
          props => <EmailAddressListRenderer contacts={props.contacts} />
        } />
      </div>
    );
  }
}

export default App;
