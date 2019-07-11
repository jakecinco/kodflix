import React from 'react';
export default function Show(props) {
    return (
    <div className='item'>
      <img src={props.coverphoto} className="App-logo" alt={`${props.title}`} />
      <div className='overlay'>
        <h3>{props.title}</h3>
      </div>
    </div>
    );
  }