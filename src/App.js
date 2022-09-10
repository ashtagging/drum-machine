import "./App.css";
import { useState, useEffect } from "react";

const audioArray = [
  {
    keyCode: 81,
    key: "Q",
    id: "Heater-1",
    test: "1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    key: "W",
    id: "Heater-2",
    test: "2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    key: "E",
    id: "Heater-3",
    test: "3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    key: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    key: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    key: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    key: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    key: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];  

const KeyboardKey = ({
  playSound,
  sound: { key, url, keyCode, id },
}) => {
  const handleKeyPress = (event) => {
    if (event.keyCode === keyCode) {
      playSound(key, id);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <button value="" id={keyCode} className="drum-pad" onClick={() => playSound(key, id)}>
      <audio className="clip" id={key} src={url} />
      {key}
    </button>
  );
};

const Keyboard = ({ playSound, displaySound, setDisplaySound }) => {
  return audioArray.map((sound) => (
    <KeyboardKey
      playSound={playSound}
      sound={sound}
      displaySound={displaySound}
      setDisplaySound={setDisplaySound}
    />
  ));
};

function App() {
  const [displaySound, setDisplaySound] = useState("");

  const playSound = (key,id) => {
    setDisplaySound(id);
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="App">
      <div id="drum-machine" className="drum-machine">
        <h1 className="title" >Drum Machine</h1>
        <div className="keyboard">
          <Keyboard
            playSound={playSound}
            displaySound={displaySound}
            setDisplaySound={setDisplaySound}
          />
        </div>
        <div id="display" className="display-text">
          {displaySound}
        </div>
      </div>
    </div>
  );
}

export default App;
