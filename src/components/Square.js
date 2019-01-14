import React from "react";
import "../styles/Square.css";

const colorOptions = ["#05F4F9", "#0ABEF6", "#0F8CF3", "#145DF0", "#1832ED", "#311DEA", "#5F22E7", "#8926E4", "#B12AE1", "#D52EDE", "#DB33BE", "#DB336B", "#DB334C", "#DB3833", "#DB5733", "#DB7733", "#DB9633", "#DBB533", "#DBD533", "#C1DB33", "#A2DB33", "#82DB33"];

const Square = props => (
  <div className="square shadow rounded" style={{ backgroundColor: colorOptions[Math.floor(Math.random() * 22)] }} onClick={props.handleClick} ></div>
);


export default Square;