import React from 'react';

export default ({ isTicking, time }) => {

  const clockStyle = {
    fontSize: 60,
    marginBottom: 50,
    marginTop: 50,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'monospace',
  };

  const display = isTicking
    ? (<div style={clockStyle}>{time || ''}</div>)
    : (<div style={clockStyle}>stopped</div>);

  return (
    <div>{display}</div>
  );
};
