import React, { Component } from "react";

class PlayButton extends Component {
  render() {
    const testAudio = new Audio("/sound1.wav");
    const startAudio = () => {
      testAudio.play();
    };
    return <button onClick={startAudio}>test button</button>;
  }
}

export default PlayButton;
