import React from "react";
import Participant from "./Participant";
import data from "./data";

function Stage(props) {
  return (
    <div className="stage">
      <div className="other">
        <Participant />
        <div className="avatar"></div>
      </div>

      <div className="self">
        <Participant />
      </div>
    </div>
  );
}

export default Stage;
