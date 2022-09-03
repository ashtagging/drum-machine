import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div className="display" id="display">
          <button className="drum-pad" id="Q">Q<audio className="clip" id="Q"></audio></button>
          <button className="drum-pad" id="W">W<audio className="clip" id="W"></audio></button>
          <button className="drum-pad" id="E">E<audio className="clip" id="E"></audio></button>
          <button className="drum-pad" id="A">A<audio className="clip" id="A"></audio></button>
          <button className="drum-pad" id="S">S<audio className="clip" id="S"></audio></button>
          <button className="drum-pad" id="D">D<audio className="clip" id="D"></audio></button>
          <button className="drum-pad" id="Z">Z<audio className="clip" id="Z"></audio></button>
          <button className="drum-pad" id="X">X<audio className="clip" id="X"></audio></button>
          <button className="drum-pad" id="C">C<audio className="clip" id="C"></audio></button>
        </div>
      </div>
    </div>
  );
}

export default App;
