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
      countdownEnd: null,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  generateCountdownEnd() {
    const countdown = Date.now();
    const twnentyMinutes = 1000 * 60 * 20;
    return countdown + twnentyMinutes;

    //const threeSeconds = 1000 * 1;
    //return countdown + threeSeconds;
  }

	millisToMinutesAndSeconds(millis) {
		const m = Math.floor(millis / 60000);
		const s = ((millis % 60000) / 1000).toFixed(0);
    const prefix = (s < 10 ? '0' : '');

    return (parseInt(s, 10) === 60)
      ? `${m + 1}:00`
      :`${m}:${prefix}${s}`;
	}

  startTimer() {
    const interval = 1000;

    const countdownEnd = this.generateCountdownEnd();

    this.setState((prev, props) => ({
      isTicking: true,
      intervalId: setInterval(this.updateTimer.bind(this), interval),
      time: this.millisToMinutesAndSeconds(countdownEnd - Date.now()),
      countdownEnd,
    }));
  }

  stopTimer() {
    const { intervalId } = this.state;

    clearInterval(intervalId);

    this.setState((prev, props) => ({
      isTicking: false,
      intervalId: null,
      time: '',
      countdownEnd: null,
    }));
  }

  updateTimer() {
    const { countdownEnd } = this.state;
    const now = Date.now();

    if (now >= countdownEnd) {
      return this.stopTimer();
    }

    this.setState((prev, props) => ({
      time: this.millisToMinutesAndSeconds(countdownEnd - Date.now()),
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
