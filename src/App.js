import "./App.css";
import { useState } from "react";

function App() {
  const [displaySound, setDisplaySound] = useState();

  return (
    <div className="App">
      <div id="drum-machine">
        <div className="display" id="display">
          <h1 className="title">Drum Machine</h1>
          <button className="drum-pad" id="Q">
            Q
            <audio
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              id="Q"
            ></audio>
          </button>
          <button className="drum-pad" id="W">
            W
            <audio
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              id="W"
            ></audio>
          </button>
          <button className="drum-pad" id="E">
            E
            <audio
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              id="E"
            ></audio>
          </button>
          <button className="drum-pad" id="A">
            A
            <audio
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              id="A"
            ></audio>
          </button>
          <button className="drum-pad" id="S">
            S
            <audio
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              id="S"
            ></audio>
          </button>
          <button className="drum-pad" id="D">
            D
            <audio
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              id="D"
            ></audio>
          </button>
          <button className="drum-pad" id="Z">
            Z
            <audio
              className="clip"
              id="Z"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            ></audio>
          </button>
          <button className="drum-pad" id="X">
            X
            <audio
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              id="X"
            ></audio>
          </button>
          <button className="drum-pad" id="C">
            C
            <audio
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              id="C"
            ></audio>
          </button>
          <div className="display-sound">{displaySound}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
