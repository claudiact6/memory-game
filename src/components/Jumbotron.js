import React from "react";
import "../styles/Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron text-center">
    <h1>Welcome to Color Memory!</h1>
    <p className="lead">Click on the colored squares. If you click on the same color twice, you lose! See how far you can get.</p>
  </div>
);

export default Jumbotron;