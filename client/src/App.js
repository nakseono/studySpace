<<<<<<< HEAD
import React from 'react';
import Header from './Header';
import MovieRankList from './MovieRankList';
import CurrentMovie from './CurrentMovie';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: null,
      movies: null
    };
  }

  render() {
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <CurrentMovie />
          <MovieRankList />
        </div>
      </>
=======
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { List, Shorten, Home, Login } from './pages';
import Template from './components/Template';

class App extends Component {
  render() {
    return (
      <div>
        <Template />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/list" component={List} />
          <Route path="/shorten" component={Shorten} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
>>>>>>> project/master
    );
  }
}

export default App;
