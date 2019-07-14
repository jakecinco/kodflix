import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getShows from './shows-get.js';

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
    return (
      <div>
        <h1>{this.state.movieTVshow.title}</h1>
        <Link to='/'>Back to home page</Link>
      </div>
    );
  }
}

