import React from 'react';
import ShowCover from './showcover/ShowCover';
import getShows from '../getShows';
import './Gallery.css';

export default function Gallery() {
    return (
        <div className='gallery'>
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