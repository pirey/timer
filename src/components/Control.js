import React from 'react';
import Flex from './Flex';

export default ({ isTicking, isPaused, start, stop, pause }) => {

  const btnStyle = {
    width: '100%',
    fontSize: 'large',
    border: 'none',
    outline: 'none',
    background: 'gold',
    padding: '20px 50px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: '0 10px',
  };

  const btn = isTicking
    ? (
      <Flex>
        <button style={btnStyle} onClick={pause}>Pause</button>
        <button style={btnStyle} onClick={stop}>Stop</button>
      </Flex>
    )
    : (
      <Flex>
        <button style={btnStyle} onClick={start}>{isPaused?'Resume':'Start'}</button>
      </Flex>
    );

  return (
    <div>{btn}</div>
  );
};
