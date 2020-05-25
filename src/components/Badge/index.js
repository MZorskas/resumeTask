import React from 'react';
import './index.css';

function Badge({ color, children }) {
  const classes = color ? `Badge ${color}` : 'Badge';

  return <li className={classes}>{children}</li>;
}

export default Badge;
