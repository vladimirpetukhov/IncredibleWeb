import React, { useState, useEffect } from 'react';
import Movie from '../components/movies/Movie';

const MovieContainer = (props) => {
  
  return (
    <div className="movie-container row">
      <div className="wrap col-12">
        {props.movies.map((movie) => (
          <Movie
            getInfo={props.getInfo}
            key={movie.id}
            movie={movie}
            setPage={props.setPage}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieContainer;
