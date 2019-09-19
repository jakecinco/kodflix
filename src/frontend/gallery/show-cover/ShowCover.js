import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShowCover.css';

export default class ShowCover extends Component {
    render() {
        let { id, title } = this.props;
        return (
            <Link to={`/${id}`} className='show-cover'>
                <img src={require(`../../common/images/${id}.jpg`)} alt={title} />
                <div className='show-cover-overlay'>
                    <h2>{title}</h2>
                </div>
            </Link>
        )
    }
    
}