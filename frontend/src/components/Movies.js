import React, { useEffect, useState } from "react";
import MovieContainer from "./MovieContainer";
import Header from "./Header";
import { GenreMovie } from "./GenreMovieContainer";
import { FilterMovies} from "./FilterMovies";
import $ from "jquery";
import { connect } from "react-redux";
import {
  mostPopular,
  upcoming,
  topRated,
  kidsPopular,
  nowPlaying,
  searchMovies
} from "../actions/movieActions";

const Movies=(props)=> {

  const [active,setActive]=useState('upcomming')

  useEffect(()=>{
    if (localStorage.getItem("category")) {
      switch (localStorage.getItem("category")) {
        case "mostPopular":
          return props.mostPopular();
        case "kidsPopular":
          return props.kidsPopular();
        case "nowPlaying":
          return props.nowPlaying();
        case "topRated":
          return props.topRated();
        default:
          props.upcoming();
          break;
      }
    } else {
      props.upcoming();
    }
  },[])
    //set upcoming movies as a default
    
  

  const setFetchMovies=()=> {
    sessionStorage.setItem("Page", "movie");
    return false;
  }


  

    return (
      <div>
        <Header searchData={props.searchMovies} />
        <GenreMovie
          mostPopular={props.mostPopular}
          upcoming={props.upcoming}
          topRated={props.topRated}
          kidsPopular={props.kidsPopular}
          nowPlaying={props.nowPlaying}
          setActive={setActive}
        />
        <FilterMovies className=""/>
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
