import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './gallery/Gallery';
import Details from './Details/Details';
import NotFound from './not-found/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/not-found' component={NotFound} />
            <Route exact path='/:showID' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;