import React, { Fragment } from "react";
import { Component } from "react";
import MovieListItem from "../movie-list-item";
import { connect } from "react-redux";

import { compose} from '../../utils'
import { withIwebService } from "../high-ordered-components";
import { moviesLoaded } from "../../actions";
import "./movie-list.css";

class MovieList extends Component {
  componentDidMount() {
    // 1.Receive Data
    const { iwebService } = this.props;
    const data = iwebService.get();
    // 2.Dispatch action to store
    this.props.moviesLoaded(data);
  }

  render() {
    const { movies } = this.props;
    return (
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieListItem movie={movie} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    movies,
  };
};

const mapDispatchToProps = {
  moviesLoaded,
};

/**
     * When the component loaded connect hold MovieList to high ordered 
     * component who's connect to redux store
     * after this functions mapStateToProps and mapDispatchToProps tells how exactly to work this connection
     * mapStateToProps - which data we want to get from redux store ( movies array)
     * mapDispatchToProps - which actions we want to make our component which actions will be transfer to store
     * when the component displaying 
     * 1. Get the service from the context with withIwebService . we have access to the service and can get data
     * 2. After getting data calling function moviesloaded. it not just action creator who only make some action
     * but automatically gives this actions and data to store
     * 3. store calls reducer who get action MOVIES_LOADED and populate movies list
     * 4. Populated movies list returns to MoviesList with mapsToProps with {movies}
     * 5. MoviesList component gets fresh movies list and render them
     */
export default compose(    
  withIwebService(),
  connect(mapStateToProps,mapDispatchToProps)
)(MovieList);
