import React from 'react';
import './App.css';
import GameContainer from "./components/GameContainer"

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id = "navbar">
        <span className="navbar-brand">Clicky Game</span>
        <div className="collapse navbar-collapse" id="navbarText">
          <div id="userGuess">
            <span className="navbar-brand" id="correctGuess">Click An Image to Begin!</span>
          </div>

          <div id="scoreDiv">
            <span className="navbar-brand">Score: <span id="currentScore"></span></span>

            <span id="divider" className="navbard-brand">|</span>

            <span className="navbar-brand">Top Score: <span id="topScore"></span> </span>
          </div>
        </div>
      </nav>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Clicky Game!</h1>
          <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
      </div>

      <div id = "gameContainer">
        <GameContainer />
      </div>

      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
          <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="30" height="30" className="d-inline-block align-top" alt="react"/>
          MADE WITH REACT
        </div>
      </nav>

    </div>
  );
}

export default App;
