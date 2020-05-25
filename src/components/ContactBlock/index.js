import React from 'react';
import './index.css';

function ContactBlock({ center, contactType, children }) {
  const classes = center ? `ContactBlock center` : 'ContactBlock';
  return (
    <div className={classes}>
      <div className="Black-box">{contactType}</div>
      {children}
    </div>
  );
}

export default ContactBlock;
