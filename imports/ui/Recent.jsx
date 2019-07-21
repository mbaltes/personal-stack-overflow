import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Question from './Question';
import Questions from '../api/questions';

class Recent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boolSort: false,
      boolSearch: false,
    };
  }
  renderQuestions(search, sort) {
    if (!search && !sort) {
      return this.props.questions.map((question) => (
        <Question key={question._id} data={question} />
      ));
    } else if (!search && sort) {
      return this.props.questionsUpvotes.map((question) => (
        <Question key={question._id} data={question} />
      ));
    } else if (search && !sort) {
      return this.props.tagsRecent.map((question) => (
        <Question key={question._id} data={question} />
      ));
    } else if (search && sort) {
      return this.props.tagsMostViewed.map((question) => (
        <Question key={question._id} data={question} />
      ));
    }
  }

  viewCount(search, sort) {
    let n;
    if (!search && !sort) {
      n = Object.keys(this.props.questions).length;
    } else if (!search && sort) {
      n = Object.keys(this.props.questionsUpvotes).length;
    } else if (search && !sort) {
      n = Object.keys(this.props.tagsRecent).length;
    } else if (search && sort) {
      n = Object.keys(this.props.tagsMostViewed).length;
    }

    return (
      <p>
        Viewing <span className="view-count-style">{n}</span> of {this.props.dbSize} questions
      </p>
    );
  }

  toggleSort() {
    this.setState({boolSort: !this.state.boolSort});
  }

  toggleSearch() {
    this.setState({boolSearch: !this.state.boolSearch});
  }

  sortView() {
    return !this.state.boolSort ? 'Recent' : 'Most viewed';
  }

  boolSearch() {
    return !this.state.boolSearch ? 'Title' : 'Tags';
  }

  render() {
    return(
      <div>
        <div className="view-section">
          <div className="view-count">
            {this.viewCount(this.state.boolSearch, this.state.boolSort)}
          </div>
          <div className="view-sort-by">
            <a 
              href="#" 
              onClick={this.toggleSearch.bind(this)}
            >
              Search by: {this.boolSearch()} &emsp;
            </a>
            <a 
              href="#" 
              onClick={this.toggleSort.bind(this)}
            >
              Sort by: {this.sortView()}
            </a>
          </div>
        </div>
        <div className="recent-questions-section">
          <section className="card-container">
            <ul className="question-list">{this.renderQuestions(this.state.boolSearch, this.state.boolSort)}</ul>
          </section>
        </div>
      </div>
    );
  }
}

export default withTracker((props) => {
  return {
    questions: Questions.find({questionTitle: {$regex: props.ss, $options: 'i'}}, { sort: { createdAt: -1 } }).fetch(),
    questionsUpvotes: Questions.find({questionTitle: {$regex: props.ss, $options: 'i'}}, { sort: { upvotes: -1 } }).fetch(),
    tagsRecent: Questions.find({tags: {$regex: props.ss, $options: 'i'}}, { sort: { createdAt: -1 } }).fetch(),
    tagsMostViewed: Questions.find({tags: {$regex: props.ss, $options: 'i'}}, { sort: { upvotes: -1 } }).fetch(),
    dbSize: Questions.find({}).count(),
  };
})(Recent);