import React, { Component } from "react";

import WebGL from "./WebGL/WebGL";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>WebGL</p>
        <WebGL />
      </div>
    );
  }
}

export default Game;
