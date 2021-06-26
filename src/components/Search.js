import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { DebounceInput } from 'react-debounce-input';
import {useHistory } from 'react-router-dom';

const Search = (props) => {
  const [sideBar, setSidebar] = useState('closed');
  const history = useHistory();
  const openCloseMenu = () => {
    let ul = document.querySelector('.topnav');
    if (sideBar === 'closed') {
      ul.classList.add('response');
      setSidebar('open');
    } else {
      ul.classList.remove('response');
      setSidebar('closed');
    }
  };

  return (
    <header className="header">
      <div className="wrapper" id="wrap">
        <nav className="navigation">
          <div className="menu">
            <FontAwesomeIcon icon={faBars} onClick={openCloseMenu} />
          </div>
          <div className="main-heading" id="name">
            <h1>
              <span>Movies</span>
            </h1>
          </div>
          <ul className="topnav" id="nav">
            <li>
              <DebounceInput
                element="input"
                debounceTimeout={400}
                type="text"
                placeholder="Search..."
                value={props.query}
                onChange={(event) => history.push(`/${event.target.value}`)}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Search;
