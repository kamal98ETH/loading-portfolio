import './App.css';
import React, { useState } from 'react'
import logo from "./images/windows-xp-logo.png";
import sound from "./sound/windows-xp-startup-sound.mp3";

function start() {
  let audio = document.getElementById("starting-sound");
  let starting = document.getElementById("starting-up");
  let welcome = document.getElementById("welcome");
  audio.play();
  starting.style.display = "none";
  welcome.style.display = "block";
  setTimeout(() => {
    window.location.replace("https://kamal98eth.github.io/portfolio")
  }, 4000)
}

function App() {
  let [clickComponent, setClickComponent] = useState(undefined)

  setTimeout(() => {
    setClickComponent(<p>Click anywhere to start</p>)
  }, 2000)

  return (
    <div id="container" onClick={start}>
      <div className="orange-border up"></div>
      <div id="light-blue">
        <div id="starting-up">
          <img src={logo} alt="windows xp logo" />
          <h2>Portfolio is starting up...</h2>
          {clickComponent}
        </div>
        <h1 id="welcome">Welcome</h1>
      </div>
      <div className="orange-border down"></div>
      <audio src={sound} id="starting-sound"></audio>
    </div>
  );
}



export default App;
