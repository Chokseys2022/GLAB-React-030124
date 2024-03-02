import React from 'react';
import './Content.css';

function Content(props) {
  return (
    <div className="content">
      
    
    <p style={{ color: props.color }}>{props.text}</p>
    </div>
  );
}

export default Content;


