import React from 'react';
import { Link } from 'react-router-dom';

export default function Show(props) {
    return (
        <Link to={`/${props.id}`} className='item'>
            <img src={props.coverphoto} className="App-logo" alt={`${props.title}`} />
            <div className='overlay'>
                <h3>{props.title}</h3>
            </div>
        </Link>
    );
}