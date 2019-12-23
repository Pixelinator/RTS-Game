import React, { Component } from "react";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick} data-testid="square">
      {props.value}
    </button>
  );
}

export default Square;
