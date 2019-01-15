import React from "react";
import Square from "./Square"

const Loser = props => (
  <span>You lost, but you made {props.lastScore} points. Click any square to start again.</span>
)

const Gameboard = props => (

  <div className="container text-center">
  <p>Your current score: {props.score} | Your high score: {props.highScore}</p>
  <h3>{(props.score === 0 && props.gamePlays > 0) ? <Loser lastScore={props.lastScore} /> : <span></span>}</h3>
    <div className="row mb-5">
      <div className="col col-3" >
        <Square handleClick={props.handleClick} />
      </div>
      <div className="col col-3">
        <Square handleClick={props.handleClick} />
      </div>
      <div className="col col-3">
        <Square handleClick={props.handleClick} />
      </div>
      <div className="col col-3">
        <Square handleClick={props.handleClick} />
      </div>
    </div>
    <div className="row mb-5">
      <div className="col col-3">
        <Square handleClick={props.handleClick} />
      </div>
      <div className="col col-3">
        <Square handleClick={props.handleClick} />
      </div>
      <div className="col col-3">
        <Square handleClick={props.handleClick} />
      </div>
      <div className="col col-3">
        <Square handleClick={props.handleClick} />
      </div>
    </div>
    <div className="row">
      <div className="col col-3">
        <Square handleClick={props.handleClick} />
      </div>
      <div className="col col-3">
        <Square handleClick={props.handleClick} />
      </div>
      <div className="col col-3">
        <Square handleClick={props.handleClick} />
      </div>
      <div className="col col-3">
        <Square handleClick={props.handleClick} />
      </div>
    </div>
  </div>
);

export default Gameboard;