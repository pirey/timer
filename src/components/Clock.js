import React from 'react';

export default ({ ticking, time }) => {

  const clockStyle = {
    fontSize: 40,
    marginBottom: 50,
    marginTop: 50,
    textTransform: 'uppercase',
    fontFamily: 'monospace',
  };

  const display = ticking
    ? (<div style={clockStyle}>{time || ''}</div>)
    : (<div style={clockStyle}>clock stoped</div>);

  return (
    <div>{display}</div>
  );
};
