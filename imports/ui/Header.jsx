import React, { Component } from 'react';
import AddQuestion from './AddQuestion';

export default class Header extends Component {
  render() {
    return(
      <header>
        <nav className="nav-container">
          <div className="nav-logo">
            <a href="#" className="nav-link"></a>
          </div>
          <div className="nav-search">
            <input type="text" ref="search-text" placeholder="Search"/>
          </div>
          <div className="nav-component">
            <AddQuestion />
          </div>
        </nav>
      </header>
    );
  }
}