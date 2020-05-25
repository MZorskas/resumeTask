import React from 'react';
import './index.css';

function Separator({ className = '' }) {
  const classes = className !== '' ? `Separator ${className}` : 'Separator';

  return <hr className={classes} />;
}

export default Separator;
