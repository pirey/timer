import React from 'react';

export default ({ isTicking, isPaused, time }) => {

  const clockStyle = {
    fontSize: '7em',
    marginBottom: 50,
    marginTop: 50,
    textAlign: 'center',
    fontFamily: 'monospace',
  };

  return (
    <div style={clockStyle}>{time || ''}</div>
  );
};
