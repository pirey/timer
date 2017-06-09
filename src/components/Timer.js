import React, { Component } from 'react';
import Clock from './Clock';
import Control from './Control';
import Flex from './Flex';

class Timer extends Component {

  constructor(props) {
    super(props);

    const remaining = this.generateDuration() - Date.now();
    const time = this.millisToMinutesAndSeconds(remaining);

    this.state = {
      intervalInMilliseconds: 1000,
      isTicking: false,
      isPaused: false,
      intervalId: null,
      time,
      remaining,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  generateDuration() {
    const now = Date.now();
    const twnentyMinutes = 1000 * 60 * 20;
    return now + twnentyMinutes;

    //const threeSeconds = 1000 * 3;
    //return now + threeSeconds;
  }

  generateRemaining() {
    const duration = this.generateDuration();
    return duration - Date.now();
  }

  milToMinutes(millis) {
    return Math.floor(millis / 60000);
  }

  milToSeconds(millis) {
		const s = ((millis % 60000) / 1000).toFixed(0);
    const prefix = (s < 10 ? '0' : '');
    return prefix + s;
  }

	millisToMinutesAndSeconds(millis) {
		const m = this.milToMinutes(millis);
    const s = this.milToSeconds(millis);

    return (parseInt(s, 10) === 60)
      ? `${m + 1}:00`
      :`${m}:${s}`;
	}

  startTimer() {
    const { intervalInMilliseconds } = this.state;

    this.setState((prev, props) => {

      return {
        isTicking: true,
        intervalId: setInterval(this.updateTimer.bind(this), intervalInMilliseconds),
      };
    });
  }

  stopTimer() {
    const { intervalId } = this.state;
    const remaining = this.generateDuration() - Date.now();
    const time = this.millisToMinutesAndSeconds(remaining);

    clearInterval(intervalId);

    this.setState((prev, props) => ({
      isTicking: false,
      isPaused: false,
      intervalId: null,
      time,
      remaining,
    }));
  }

  pauseTimer() {
    const { intervalId } = this.state;

    clearInterval(intervalId);

    this.setState((prev, props) => ({
      isTicking: false,
      isPaused: true,
      intervalId: null,
    }));
  }

  updateTimer() {
    const { remaining, intervalInMilliseconds } = this.state;
    const updatedRemaining = remaining - intervalInMilliseconds;

    if (updatedRemaining <= 0) {
      return this.stopTimer();
    }

    this.setState((prev, props) => ({
      time: this.millisToMinutesAndSeconds(updatedRemaining),
      remaining: updatedRemaining,
    }));
  }

  render() {
    const { isTicking, isPaused } = this.state;

    return (
      <Flex full center vertical>
        <Clock isTicking={isTicking} isPaused={isPaused} time={this.state.time} />
        <Control
          isTicking={isTicking}
          isPaused={isPaused}
          start={this.startTimer}
          stop={this.stopTimer}
          pause={this.pauseTimer}
        />
      </Flex>
    );
  }
}

export default Timer;
