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

    const savedFilter = savedList.filter(element => element.id === movie.id);

    if (savedFilter.length !== 0){
      const filtered = savedList.filter(element => element.id !== movie.id);

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
        <SavedList savedList={this.state.savedList} />
        <Route exact
          path="/" 
          component={MovieList} />
        <Route
          path="/movies/:id"
          render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} savedList={this.state.savedList} />}
        />
      </div>
    );
  }
}
