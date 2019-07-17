import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return(
      <div className="top-nav">
        <ul>
          <a href="#">psodb</a>
          <input type="text" ref="search-text" placeholder="Search"/>
        </ul>
      </div>
    );
  }
}