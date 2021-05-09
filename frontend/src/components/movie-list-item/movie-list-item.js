import React, { Fragment} from 'react'

import classes from './movie-list-item.css'
import { BASE_IMAGE_URL } from '../../constants/api';

const MovieListItem=({movie})=>{
    const { title,overview,popularity,poster_path}=movie
    console.log(movie)
    return(
        <Fragment>
            <div
      className={classes.Container}
      style={{
        backgroundImage: `url(${BASE_IMAGE_URL}/w1280/${movie.backdrop_path})`,
      }}
    >
      <div className={classes.Poster}>
        <img src={`${BASE_IMAGE_URL}/w300/${movie.poster_path}`} alt="" />
      </div>
      <div className={classes.Details}>
        <h1 className={classes.Title}>{movie.title}</h1>
        <p className={classes.Tagline}>{movie.tagline}</p>
        
        <p className={classes.Genres}>
          {movie.vote_count} votes / {(movie.runtime / 60).toFixed(2)} h. /{' '}
          {movie.release_date.slice(0, 4)}
        </p>
        <p className={classes.Overview}>{movie.overview}</p>
        {movie.homepage && (
          <a href={movie.homepage} className={classes.Watch}>
            Watch
          </a>
        )}
      </div>
    </div>
        </Fragment>
    )
}

export default MovieListItem