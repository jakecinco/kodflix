import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Loading from '../common/loading/Loading';
import './Details.css';

export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            show: {}
        };
    }

    componentDidMount() {
        fetch('/rest/shows')
            .then(response => response.json())
            .then(shows => {
                let showID = this.props.match.params.showID;
                let show = shows.find(show => show.id === showID);
                this.setState({ show });
            });
    }

    render() {
        let show = this.state.show;
        if (show) {
            return show.id ?
                <DetailsContent show={show} /> :
                <Loading />
        } else {
            return <Redirect to='/not-found' />;
        }
    }

}

function DetailsContent({ show }) {
    return (
        <div className='details'>
            <h1>{show.title}</h1>
            <div className='details-content'>
                <h3 className='details-content-synopsis'>
                    {show.synopsis}
                </h3>
                <div className='details-content-cover'>
                    <img
                        src={require(`../common/images/${show.id}.jpg`)}
                        alt={show.title} />
                </div>
            </div>
            <br />
            <Link to='/'>Back to home page</Link>
        </div>
    )
}
