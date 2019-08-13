import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../getShows';
import './Details.css';

export default class Details extends Component {
    constructor() {
        super();
        this.state = {
            show: {}
        };
    }

    componentDidMount() {
        let showID = this.props.match.params.showID;
        let show = getGallery().find((show) => show.id === showID);
        this.setState({ show });
    }

    render() {
        let show = this.state.show;
        return (
            this.state.show ?
                <div className='details'>
                    <h1>{show.title}</h1>
                    <div className='details-content'>
                        <div className='details-content-cover'>
                            <h3 className='details-content-synopsis'>
                                {show.synopsis}
                            </h3>
                        </div>
                        
                        <div className='details-content-cover'>
                            <img
                                src={show.coverphoto}
                                alt={show.title}
                            />
                        </div>

                    </div>
                    <br />
                    <Link to='/'>Back to home page</Link>
                </div> :
                <Redirect to='/not-found' />

        );

    }
}
