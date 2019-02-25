import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if (savedList.includes(movie)){
      const filtered = savedList.filter(element => element !== movie)
      this.setState({ savedList: filtered });
    }
    else{
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} removeFromSavedList={this.removeFromSavedList} savedList={this.state.savedList} />}
        />
      </div>
    );
  }
}
