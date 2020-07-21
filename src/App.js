import React from "react";
import Participant from "./Participant";
import ParticipantList from "./ParticipantList";
import Stage from "./Stage";
import data from "./data";

function App(props) {
  return (
    <main className="App">
      <ParticipantList />
      <Stage />
    </main>
  );
}

export default App;
