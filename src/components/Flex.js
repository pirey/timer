import React from 'react';

export default ({ children, style = {}, full = false, center = false, vertical = false }) => {
  let flexStyle = {
    display: 'flex',
    flexDirection: vertical ? 'column' : 'row',
  };

  const centerStyle = {
    alignItems: 'center',
    justifyContent: 'center'
  };

  const fullStyle = {
    width: '100%',
    height: '100%',
    position: 'fixed',
  };

  if (center) {
    flexStyle = { ...flexStyle, ...centerStyle };
  }

  if (full) {
    flexStyle = { ...flexStyle, ...fullStyle };
  }

  flexStyle = { ...flexStyle, ...style };

  return (
    <div style={flexStyle}>{children}</div>
  );
};
