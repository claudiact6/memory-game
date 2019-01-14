import React from "react";
import Square from "./Square"

const Gameboard = props => (

  <div className="container text-center">
  <p>Your current score: {props.score} | Your high score: {props.highscore}</p>
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