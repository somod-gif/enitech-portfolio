import React from 'react';
import './style.css'

function PageHeaderContent (props) {
  const { headerText, icon } = props;
  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
}
export default PageHeaderContent;
