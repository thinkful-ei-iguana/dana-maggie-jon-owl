import React from 'react';
// import './App.css';

import ParticipantsList from './participants';

export default function Stage(props){//takes a bunch of contacts
  let contacts = {...props}
  let contactsOnStage = contacts.map(contact=> <contactOnStage {...contact}/>);  
  return (
  <div className="stage stage__2-contacts">{contactsOnStage}</div>
  )
}


