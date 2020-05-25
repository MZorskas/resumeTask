import React from 'react';
import './index.css';

function SocialLink({ children, className, src, alt, href }) {
  const classes = `SocialLink ${className}`;

  return (
    <React.Fragment>
      <li className={classes}>
        <img src={src} alt={alt}></img>
        <a href={href} target="_blank">
          {children}
        </a>
      </li>
    </React.Fragment>
  );
}

export default SocialLink;
