import React from 'react';
import './index.css';

function Title({ children, level }) {
  const Tag = `h${level}`;

  return <Tag className="Title">{children}</Tag>;
}

export default Title;
