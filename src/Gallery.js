import React from 'react';
import Show from './Show';
import getShows from './shows-get.js';

export default function Gallery() {
    return (
      <div>
        <div className='container'>
          {
            getShows().map(show => (
            <Show 
              key={show.id}
              id={show.id} 
              title={show.title} 
              coverphoto={show.coverphoto} />
          ))
          }
          
        </div>
      </div>
    );
  }


  