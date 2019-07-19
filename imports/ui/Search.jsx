import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Search extends Component {
  render() {
    return(
        <div className="nav-search">
          <form>
            <input 
              type="text" 
              ref="search-text"
              list="search-list" 
              placeholder="Search"
            />
            <datalist id="search-list">{this.renderSearchList()}</datalist>
          </form>
        </div>
    );
  }

  renderSearchList() {
    return this.props.data.map((item) => (
      <option key={item._id} value={item.questionTitle}/>
    ));
  }
}