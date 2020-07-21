import React from "react";
import Participant from "./Participant";
import data from "./data";
import "./Stage.css";

function Stage(props) {
  const onStageParticipants = props.participants.map((participant) => {
    if (participant.onStage) {
      return (
        <Participant
          key={participant.id}
          name={participant.name}
          avatar={participant.avatar}
        />
      );
    }
  });

  console.log("on stage participants: ", onStageParticipants);

  return (
    <div className="stage">
      <div className="other">
        {onStageParticipants}
        <div className="avatar"></div>
      </div>
      <div className="user">User Avatar Here</div>
    </div>
  );
}

export default Stage;
