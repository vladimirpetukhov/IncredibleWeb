import React, { useEffect, useState } from "react";
import MovieContainer from "../containers/MovieContainer";
import Search from '../components/Search'
import { GenreMovie } from "../components/genres/GenreMovie";
import { connect } from "react-redux";
import {
  mostPopular,
  upcoming,
  topRated,
  kidsPopular,
  nowPlaying,
  searchMovies
} from "../actions/movieActions";
import {useParams, useLocation} from 'react-router-dom'

const Movies=(props)=> {

  const [active,setActive]=useState('upcomming')
  const {genre}=useParams()
  
  const location=useLocation();
  useEffect(()=>{
    console.log(genre)
    console.log(location)
    console.log(props)
    if (genre) {
      switch (genre) {
        case "upcomming":
          return props.mostPopular();
        case "popular":
          return props.kidsPopular();
        case "cinema":
          return props.nowPlaying();
        case "topRated":
          return props.topRated();
        default:
          props.searchMovies(genre);
          break;
      }
    } else {
      props.upcoming();
    }
  },[genre])
    //set upcoming movies as a default
    
  

  const setFetchMovies=()=> {
    sessionStorage.setItem("Page", "movie");
    return false;
  }


  

    return (
      <div>
        <Search searchData={props.searchMovies} />
        <GenreMovie
          setActive={setActive}
        />
        
        <MovieContainer
          movies={props.movies}
          setPage={setFetchMovies}
        />
      </div>
    );
  
}

const mapStateToProps = (state) => ({
  movies: state.movies.searchedMovies,
});

export default connect(mapStateToProps, {
  mostPopular,
  upcoming,
  topRated,
  kidsPopular,
  nowPlaying,
  searchMovies,
})(Movies);
