import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import Recent from './Recent';
import AddQuestion from './AddQuestion';
import Questions from '../api/questions';


export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchState: '',
    };
  }

  render() {
    return(
      <div>
        <header>
          <nav className="nav-container">
            <div className="nav-logo">
              <a href="#" className="nav-link"></a>
            </div>
            <div className="nav-search">
              <form>
                <input 
                  type="text" 
                  ref="searchText"
                  list="search-list" 
                  placeholder="Search"
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                />
              </form>
            </div>
            <div className="nav-add-btn">
              <AddQuestion />
            </div>
          </nav>
        </header>
        <Recent ss={this.state.searchState}/>
      </div>
    );
  }

  handleChange() {
    let tmp = ReactDOM.findDOMNode(this.refs.searchText).value.trim();
    this.setState({searchState: tmp});
  }
}