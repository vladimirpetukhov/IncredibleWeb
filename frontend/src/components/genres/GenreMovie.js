import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './genremovies.css'

export const GenreMovie = () => {
  return (
    <section className="subheader">
      <div className="genre-container">
        <ul className="list">
          <li key={0} id="upcoming" >
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li key={1} id="upcoming" >
            <NavLink activeClassName="active" to="/upcomming">Upcomming</NavLink>
          </li>
          <li key={2} id="cinema" activeClassName="active">
            <NavLink activeClassName="active" to="/cinema">Cinema</NavLink>
          </li>
          <li key={3} id="popular" activeClassName="active">
            <NavLink activeClassName="active" to="/popular">Popular</NavLink>
          </li>

          <li key={4} id="topRated" activeClassName="active">
            <NavLink activeClassName="active" to="/topRated">Top Rated</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};
