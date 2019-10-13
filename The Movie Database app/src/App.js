import React, { Component } from 'react';

import './App.css';
import AllCategory from './components/AllCatigory';

import Films from './components/films';
import Home from './components/home';
import DitailFilm from './components/ditail-film';
import { fetchDataCatigory } from './actions/list-catigory';
import { fetchDataMovieList } from './actions/list.movie'
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {counter : 0}
  }
  componentDidMount() {
    this.props.fethCatigory("https://api.themoviedb.org/3/genre/movie/list?api_key=38b0b64e1c4ca9ee5b886b99a6aa31c8&language=ru-RU");
    this.props.fetchMovie("https://api.themoviedb.org/3/list/1?api_key=38b0b64e1c4ca9ee5b886b99a6aa31c8&language=ru-RU");
    /*<img src={`http://image.tmdb.org/t/p/original${pop.poster_path}`} />
                <p>{pop.overview}</p>*/
  }
  render() {
    return (
      <Router >
        <div className="container">
          <nav className="navbar">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/allcategory">Категории</NavLink></li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/allcategory" render={(routerprops) => <AllCategory category={this.props.category}  {...routerprops} />} />

          <Route path="/category/:id" render={(routerprops) => <Films movie={this.props} {...routerprops}  />} />
          <Route path="/ditailfilm/:id" render={(routerprops) => <DitailFilm movie={this.props} {...routerprops} />} />
        </div>
      </Router>
    );

  }
}

const MapStateToProps = (state) => {
  return {
    category: state.listcategory,
    movie: state.listmovie

  }
}
const MapDispatchToProps = (dispatch) => {
  return {
    fethCatigory: (url) => dispatch(fetchDataCatigory(url)),
    fetchMovie: (url) => dispatch(fetchDataMovieList(url))
  }
}
App = connect(
  MapStateToProps,
  MapDispatchToProps
)(App);

export default App = connect(MapStateToProps, MapDispatchToProps)(App);
