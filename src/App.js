import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand">Clicky Game</span>
        <div class="collapse navbar-collapse" id="navbarText">
          <div id="userGuess">
            <span class="navbar-brand" id="correctGuess">Click An Image to Begin!</span>
          </div>

          <div id="scoreDiv">
            <span class="navbar-brand">Score: <span id="currentScore"></span></span>

            <span id="divider" class="navbard-brand">|</span>

            <span class="navbar-brand">Top Score: <span id="topScore"></span> </span>
          </div>
        </div>
      </nav>

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Clicky Game!</h1>
          <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
      </div>

      <div id = "gameContainer">
        {/* <GameContainer /> */}
      </div>

      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="30" height="30" class="d-inline-block align-top" alt="react"/>
          MADE WITH REACT
        </a>
      </nav>

    </div>
  );
}

export default App;
