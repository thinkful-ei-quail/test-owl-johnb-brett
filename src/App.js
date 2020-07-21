import React from "react";
import Participant from "./Participant";
import ParticipantList from "./ParticipantList";
import Stage from "./Stage";

function App(props) {
  return (
    <main className="App">
      <ParticipantList participants={props.data} />
      <Stage participants={props.data} />
    </main>
  );
}

export default App;
