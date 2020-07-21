import React from "react";

function Participant(props) {
  const style = {
    fontSize: 50,
    color: null,
  };

  if (props.inSession) {
    style.color = "green";
  } else {
    style.color = "lightgrey";
  }

  return (
    <div>
      <img src={props.avatar} alt="avatar" />
      <h3>{props.name}</h3>

      {props.onStage ? (
        <div>
          <span className="onStage" style={style}>
            &#8226;
          </span>
          <span className="onStage"> on stage</span>
        </div>
      ) : (
        <div>
          <span className="observing" style={style}>
            &#8226;
          </span>
          <span className="observing"> observing</span>
        </div>
      )}
    </div>
  );
}

export default Participant;
