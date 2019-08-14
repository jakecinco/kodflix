import React, { Component } from 'react';
import ShowCover from './show-cover/ShowCover';
import getShows from '../getShows';
import './Gallery.css';

export default class Gallery extends Component {

    componentDidMount() {
        fetch('/rest/shows')
            .then(res => res.json())
            .then(showJSON => console.log(showJSON));
    }

    render() {
        return (
            <div className='gallery' >
                {
                    getShows().map(show => (
                        <ShowCover
                            key={show.id} //Each child in a list should have a unique "key" prop.
                            id={show.id}
                            title={show.title}
                            coverphoto={show.coverphoto} />
                    ))
                }
            </div>
        );
    }


}