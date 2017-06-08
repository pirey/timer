import React, { Component } from 'react';
import Clock from './Clock';
import Control from './Control';
import Flex from './Flex';

class Timer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isTicking: false,
      intervalId: null,
      time: '',
      countdownStarted: null,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  generateCountdown() {
    const countdown = new Date();
    const twnentyMinutes = 1000 * 60 * 20;
    countdown.setTime(countdown.getTime() + twnentyMinutes);

    //const threeSeconds = 1000 * 3;
    //countdown.setTime(countdown.getTime() + threeSeconds);

    return countdown;
  }

  getTimeString() {

    const now = new Date();
    const countdown = (this.state.countdownStarted) ? this.state.countdownStarted : this.generateCountdown();

    const distance = countdown - now;

    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);


    if (distance < 1000) {
      this.stopTimer();
      return '';
    }

    return `${m}m ${s}s`;
  }

  startTimer() {
    const interval = 1000;

    this.setState((prev, props) => ({
      isTicking: true,
      intervalId: setInterval(this.updateTimer.bind(this), interval),
      time: this.getTimeString(),
      countdownStarted: this.generateCountdown(),
    }));
  }

  stopTimer() {
    const { intervalId } = this.state;

    clearInterval(intervalId);

    this.setState((prev, props) => ({
      isTicking: false,
      intervalId: null,
      time: '',
      countdownStarted: null,
    }));
  }

  updateTimer() {
    this.setState((prev, props) => ({
      time: this.getTimeString(),
    }));
  }

  render() {
    const { isTicking } = this.state;

    return (
      <Flex full center vertical>
        <Clock isTicking={isTicking} time={this.state.time} />
        <Control
          isTicking={isTicking}
          start={this.startTimer}
          stop={this.stopTimer}
        />
      </Flex>
    );
  }
}

export default Timer;
