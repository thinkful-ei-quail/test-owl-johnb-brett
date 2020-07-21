import React from 'react'
import Participant from './Participant'
import participants from './data'



function ParticipantList(props) {

    const participantComponents = props.participants.map(participant => <Participant name={participant.name} inSession={participant.inSession} onStage={participant.onStage} />)

    return (
        <div>
            {participantComponents}
        </div>
    )
}

export default ParticipantList
