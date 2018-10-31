import React, { Component } from 'react';
import contacts from './contacts.json';

class ContactListContainer extends Component {

  render() {
    return (
      <div>
        {
          this.props.renderer({contacts: contacts})
        }
      </div>
    );
  }
}

export default ContactListContainer;
