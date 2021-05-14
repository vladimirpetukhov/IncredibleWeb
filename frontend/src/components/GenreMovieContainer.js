import React from "react";

export const GenreMovie = (props) => {

  
  
  return (
    <section className="subheader">
      <div className="genre-container">
        <ul className="list">
          <li
          id="upcoming"
            className=""
            onClick={(event) => props.upcoming(event.target.value)}
          >
            Upcoming
          </li>
          <li
            className=""
            id="cinema"
            onClick={(event) => props.nowPlaying(event.target.value)}
          >
            Cinema
          </li>
          <li
            id="popular"
            className=""
            onClick={(event) => props.mostPopular(event.target.value)}
          >
            Popular
          </li>
          <li
            id="kids"
            className=""
            onClick={(event) => props.kidsPopular(event.target.value)}
          >
            Kids
          </li>
          <li
            id="topRated"
            className=""
            onClick={(event) => props.topRated(event.target.value)}
          >
            Top Rated
          </li>
        </ul>
      </div>
    </section>
  );
};
