import React, { Component } from "react";
import Gameboard from "./Gameboard"

let highestScore = 0;
let currentScore = 0;


class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      clicked: []
    }
  };

  handleClick = event => {
    event.preventDefault();
    console.log(event.target.style.backgroundColor);
    let color = event.target.style.backgroundColor
    for (const value of this.state.clicked) {
      if (value === color) {
        this.youLose();
        break;
      }
    }
    currentScore ++;
    this.setState({ clicked: [...this.state.clicked, event.target.style.backgroundColor] });
    console.log(currentScore);
  }

  youLose = () => {
    console.log("you lost!");
    if (currentScore > highestScore) {
      highestScore = currentScore;
    }
    this.emptyArray(this.state.clicked);
    console.log(this.state.clicked);
    return currentScore = 0;

  }

  emptyArray = (arr) => {
    return arr.length = 0;
  }



  render() {
    return (
      <div>
        <Gameboard handleClick={this.handleClick} score={currentScore} highscore={highestScore} />
      </div>
    );
  }

};

export default GameContainer;