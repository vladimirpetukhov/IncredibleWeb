import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const GenreMovie = (props) => {
  
  return (
    <section className="subheader">
      <div className="genre-container">
        <ul className="list">
          <li
            className="card active"
            onClick={(event) => props.upcoming(event.target.value)}
          >
            Upcoming
          </li>
          <li
            className=""
            onClick={(event) => props.nowPlaying(event.target.value)}
          >
            Cinema
          </li>
          <li
            className=""
            onClick={(event) => props.mostPopular(event.target.value)}
          >
            Popular
          </li>
          <li
            className=""
            onClick={(event) => props.kidsPopular(event.target.value)}
          >
            Kids
          </li>
          <li
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
