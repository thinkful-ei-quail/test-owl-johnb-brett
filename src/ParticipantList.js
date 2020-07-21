import React from "react";
import Participant from "./Participant";

function ParticipantList(props) {
  const participantComponents = props.participants.map((participant) => (
    <Participant
      key={participant.id}
      name={participant.name}
      inSession={participant.inSession}
      onStage={participant.onStage}
      avatar={participant.avatar}
    />
  ));

  return <div>{participantComponents}</div>;
}

export default ParticipantList;
