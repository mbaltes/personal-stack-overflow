import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return(
      <div className="top-nav">
        <a href="#">personal stack overflow</a>
        <input type="text" ref="search-text" placeholder="Search"/>
      </div>
    );
  }
}