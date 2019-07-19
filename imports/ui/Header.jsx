import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import AddQuestion from './AddQuestion';
import Search from './Search';
import Questions from '../api/questions';


class Header extends Component {
  render() {
    return(
      <header>
        <nav className="nav-container">
          <div className="nav-logo">
            <a href="#" className="nav-link"></a>
          </div>
          <div className="nav-search">
            <Search data={this.props.questions}/>
          </div>
          <div className="nav-add-btn">
            <AddQuestion />
          </div>
        </nav>
      </header>
    );
  }
}


export default withTracker(() => {
  return {
    questions: Questions.find({}).fetch(),
  };
})(Header);