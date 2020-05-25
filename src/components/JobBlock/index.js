import React from 'react';
import './index.css';

function JobBlock({ className, align, position, company, period, children }) {
  const classes = className ? `JobBlock ${className}` : 'JobBlock';

  // const desClasses = customPadding
  //   ? `JobDescription ${customPadding}`
  //   : 'JobDescription';

  return (
    <div className={classes}>
      <div className="JobHeader">
        <span>{position}</span>
        <span>{company}</span>
        <span>{period}</span>
      </div>
      <div className="JobDescription">{children}</div>
    </div>
  );
}

export default JobBlock;
