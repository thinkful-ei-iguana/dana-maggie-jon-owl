import React from 'react';


export default function IndividualParticipant({name, avatar, inSession, onStage}) {
    

    return (
        <div className="session-participant"> 
            <img src={avatar} alt={name} className="user-avatar" /> 
            <div className="participant-info"> 
                <h6 className="participant-name">{name}</h6> 
                <div className={`participant-status participant-status__${inSession ? 'green' : 'grey'}`}>
                    {onStage ? 'on stage' : 'in session'}
                </div> 
            </div> 
        </div>
    )
}