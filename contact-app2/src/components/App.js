import React from 'react';
import './App.css';
import Header  from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contacts=[
    {
      id:"1",
      name: "Swati",
      email: "swati@gmail.com",
    },
    {
      id:"2",
      name: "Cherry",
      email: "Cherry@gmail.com",
    },
    {
      id:"3",
      name: "Krishna",
      email: "krishna@gmail.com",
    }

  ];
  return (
    <div className="ui container">
    <Header title="SST India"/>
    <AddContact/>  
    <ContactList contacts={contacts}/>
    </div>
  );
  }

export default App;
