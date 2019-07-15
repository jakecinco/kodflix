import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getShows from '../shows-get.js';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      movieTVshow: {}
    };
  }

  componentDidMount() {
    let showID = this.props.match.params.showID;
    let movieTVshow = getShows()
      .find((movieTVshow) => movieTVshow.id === showID);
    this.setState({ movieTVshow });
  }

  render() {
    if (this.state.movieTVshow === undefined) {
      return <Redirect to='/not-found' />
    } else {
      return (
        <div className='Details'>
          <h1>{this.state.movieTVshow.title}</h1>
          <div className='container'>
            <div className='text'>{this.state.movieTVshow.details}</div>
            <img className='image'
              src={this.state.movieTVshow.coverphoto}
              alt={this.state.movieTVshow.title} />
          </div>
          <Link to='/'>Back to home page</Link>
        </div>
      );
    }

  }
}

