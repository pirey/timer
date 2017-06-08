import React, { Component } from 'react';
import Clock from './Clock';
import Control from './Control';
import Flex from './Flex';

class Timer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ticking: false,
      intervalId: null,
      time: ''
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  getTimeString() {
    const now = new Date();
    const h = now.getHours();
    const i = now.getMinutes();
    const s = now.getSeconds();
    return `${h}:${i}:${s}`;
  }

  startTimer() {
    const interval = 1000;

    this.setState((prev, props) => ({
      ticking: true,
      intervalId: setInterval(this.updateTimer.bind(this), interval),
      time: this.getTimeString(),
    }));
  }

  stopTimer() {
    const { intervalId } = this.state;

    clearInterval(intervalId);

    this.setState((prev, props) => ({
      ticking: false,
      intervalId: null,
    }));
  }

  updateTimer() {

    this.setState((prev, props) => ({
      time: this.getTimeString(),
    }));
  }

  render() {
    const { ticking } = this.state;

    return (
      <Flex full center vertical>
        <Clock ticking={ticking} time={this.state.time} />
        <Control
          ticking={ticking}
          start={this.startTimer}
          stop={this.stopTimer}
        />
      </Flex>
    );
  }
}

export default Timer;
