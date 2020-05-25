import React from 'react';
import './index.css';

function EducationBlock({ className, schoolName, year, degree, noline }) {
  //   const classes = `EducationBlock ${className}`;
  return (
    <React.Fragment>
      <div className="EducationBlock">
        <span>{schoolName}</span>
        <span>{year}</span>
        <span>{degree}</span>

        {!noline && <hr className="line" />}
      </div>
    </React.Fragment>
  );
}

export default EducationBlock;
