import React, { Component } from 'react';
import AddQuestion from './AddQuestion';

export default class Header extends Component {
  render() {
    return(
      <div className="top-nav">
        <ul>
          <a href="#">psodb</a>
          <input type="text" ref="search-text" placeholder="Search"/>
          <AddQuestion />
        </ul>
      </div>
    );
  }
}