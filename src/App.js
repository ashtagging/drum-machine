import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [displaySound, setDisplaySound] = useState("");

  const playSound = (event) => {
    var soundName = event.target.id;
    var name = event.target.innerText;

    setDisplaySound(`${soundName}`);
    var audio = document.getElementById(`${name}`);
    audio.play();
  };

  const detectKeyDown = (event) => {
    switch (event.key) {
      case "q":
        document.getElementById("Q").play();
        setDisplaySound("Heater-1");
        break;
      case "w":
        document.getElementById("W").play();
        setDisplaySound("Heater-2");
        break;
      case "e":
        document.getElementById("E").play();
        setDisplaySound("Heater-3");
        break;
      case "a":
        document.getElementById("A").play();
        setDisplaySound("Heater-4");
        break;
      case "s":
        document.getElementById("S").play();
        setDisplaySound("Clap");
        break;
      case "d":
        document.getElementById("D").play();
        setDisplaySound("Open-HH");
        break;
      case "z":
        document.getElementById("Z").play();
        setDisplaySound("Kick-n-Hat");
        break;
      case "x":
        document.getElementById("X").play();
        setDisplaySound("Kick");
        break;
      case "c":
        document.getElementById("C").play();
        setDisplaySound("Closed-HH");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", detectKeyDown, true);
  }, []);

  return (
    <div className="App">
      <div id="drum-machine">
        <div className="display" id="display">
          <h1 className="title">Drum Machine</h1>
          <button className="drum-pad" id="Heater-1" onClick={playSound}>
            Q
            <audio
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              id="Q"
              preload='auto'
            ></audio>
          </button>
          <button className="drum-pad" id="Heater-2" onClick={playSound}>
            W
            <audio
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              id="W"
              preload='auto'
            ></audio>
          </button>
          <button className="drum-pad" id="Heater-3" onClick={playSound}>
            E
            <audio
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              id="E"
              preload='auto'
            ></audio>
          </button>
          <button className="drum-pad" id="Heater-4" onClick={playSound}>
            A
            <audio
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              id="A"
            ></audio>
          </button>
          <button className="drum-pad" id="Clap" onClick={playSound}>
            S
            <audio
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              id="S"
            ></audio>
          </button>
          <button className="drum-pad" id="Open-HH" onClick={playSound}>
            D
            <audio
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              id="D"
            ></audio>
          </button>
          <button className="drum-pad" id="Kick-n-Hat" onClick={playSound}>
            Z
            <audio
              className="clip"
              id="Z"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            ></audio>
          </button>
          <button className="drum-pad" id="Kick" onClick={playSound}>
            X
            <audio
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              id="X"
            ></audio>
          </button>
          <button className="drum-pad" id="Closed-HH" onClick={playSound}>
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
