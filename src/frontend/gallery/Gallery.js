import React, { Component } from 'react';
import ShowCover from './show-cover/ShowCover';
import './Gallery.css';

export default class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            shows: []
        };

    }

    componentDidMount() {
        fetch('/rest/shows')
            .then(response => response.json())
            .then(shows => this.setState({ shows }));
    }
    render() {
        return (
            <div className='gallery'>
                {
                    this.state.shows.map(show => (
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