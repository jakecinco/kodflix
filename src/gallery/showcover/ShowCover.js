import React from 'react';
import { Link } from 'react-router-dom';
import './ShowCover.css';

export default function ShowCover(props) {
    return (
        <Link to={`/${props.id}`} className='show-cover'>
            <img src={props.coverphoto} alt={`${props.title}`} />
            <div className='show-cover-overlay'>
                <h2>{props.title}</h2>
            </div>
        </Link>
    )
}