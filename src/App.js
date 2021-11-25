import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home'
import Admin from './components/Admin'
import Movies from './components/Movies'
import Movie from './components/Movie'
import Categories from './components/Categories';
import Category from './components/Category';

import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <Router>
      <div className="App container m-0">
        <div className="row">
          <h1>
            <Link to="/" className="no-decorations bg-light">CINEMA</Link>
          </h1>
        </div>

        <div className="d-flex">
          <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="list-group list-group-flush">

              <Link to="/movies" className="list-group-item list-group-item-action list-group-item-light p-3">Movies</Link>
              <Link to="/by-category" className="list-group-item list-group-item-action list-group-item-light p-3">Category</Link>
              <Link to="/admin" className="list-group-item list-group-item-action list-group-item-light p-3">Manage Catalogue</Link>

            </div>
          </div>

          <div className="col-9 m-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/movies/:id" element={<Movie />} />
              <Route exact path="/by-category/:name" element={<Category />} />
              <Route exact path="/by-category" element={<Categories />} />
              <Route path="/movies" element={<Movies />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
