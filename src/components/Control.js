import React from 'react';

export default ({ isTicking, start, stop }) => {

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
  };

  const btn = isTicking
    ? (<button style={btnStyle} onClick={stop}>Stop</button>)
    : (<button style={btnStyle} onClick={start}>Start</button>);

  return (
    <div>{btn}</div>
  );
};
