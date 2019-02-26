import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.savedList.map(movie => (
          <Link
            to={`/movies/${movie.id}`}
            style={{textDecoration: 'none', color: 'black'}}
            key={movie.title}
          >
            <span className="saved-movie">{movie.title}</span>
          </Link>
        ))}
        <Link to="/" className="home-button">Home</Link>
      </div>
    );
  }
}
