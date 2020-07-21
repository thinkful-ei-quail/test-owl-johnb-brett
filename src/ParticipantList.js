import React from 'react'
import Participant from './Participant'

function ParticipantList() {
    return (
        <div>
        <Participant name='brett' inSession onStage={false}/>
        <Participant name='john' inSession={false} onStage={false} />
        <Participant name='bob' inSession={false} onStage={false} />
        </div>
    )
}

export default ParticipantList
