import React, { Component } from "react";
import Gameboard from "./Gameboard"

let highestScore = 0;
//let currentScore = 0;
let lastScore = 0;
let gamePlays = 0;


class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      clicked: [],
      currentScore: 0
    }
  };

  handleClick = event => {
    event.preventDefault();
    console.log(event.target.style.backgroundColor);
    let color = event.target.style.backgroundColor
    let inArray = this.state.clicked.includes(color);
      if (inArray === true) {
        this.youLose();
      } else {
        this.setState({currentScore: this.state.currentScore + 1});
        this.setState({ clicked: [...this.state.clicked, event.target.style.backgroundColor] });
        console.log(this.state.currentScore);
      }
    };

  youLose = () => {
    console.log("you lost!");
    if (this.state.currentScore > highestScore) {
      highestScore = this.state.currentScore;
    };
    this.emptyArray(this.state.clicked);
    console.log(this.state.clicked);
    lastScore = this.state.currentScore;
    this.setState({currentScore: 0});
    gamePlays++;
  }

  emptyArray = (arr) => {
    arr.length = 0;
  }



  render() {
    return (
      <div>
        <Gameboard handleClick={this.handleClick} score={this.state.currentScore} highScore={highestScore} lastScore={lastScore} gamePlays={gamePlays}/>
      </div>
    );
  }

};

export default GameContainer;