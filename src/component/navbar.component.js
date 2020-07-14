import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      
        <nav className="navbar navbar-light bg-light">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to="/" className="nav-link active" href="#!">HOME</Link>
            </li>
          </ul>
          <div>
            <ul className="nav nav-pills nav-justified">
              <li className="navbar-item">
                <Link to="/add" className="nav-link" href="#!">Add product</Link>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}