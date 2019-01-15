import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import GameContainer from './components/GameContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <GameContainer />
        <footer class="footer mt-5 text-center"><a href="https://www.freepik.com/free-vector/colorful-stripes-background_792171.htm">Striped header image designed by Freepik</a></footer>
      </div>
    );
  }
}

export default App;
