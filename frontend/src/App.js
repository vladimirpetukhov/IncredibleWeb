import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Movies from './pages/Movies';
import MovieInfo from './components/movies/MovieInfo';
import { Provider } from 'react-redux';
import store from './store/store';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <div className="App">
            <Route
              exact
              path="/:genre?"
              render={(props) => {
                return <Movies />;
              }}
            />
            
            <Route path="/MovieInfo" render={() => <MovieInfo />} />
            <footer className="main-footer">
              <h4>Designed & developed by Vladimir Petukhov</h4>
            </footer>
          </div>
        </Switch>
      </Provider>
    );
  }
}

export default App;
