import React from 'react';
import IndividualParticipant from './participant-info'

export default function ParticipantsList(props) {
  console.log(props)
  const allParticipants = props.participants.map(participant => <IndividualParticipant {...participant}/>);
  
  return (
    <div className="participants-list"> 
      {allParticipants}
    </div>
  )
}
