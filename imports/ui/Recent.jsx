import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Question from './Question';
import Questions from '../api/questions';

class Recent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: false,
    };
  }
  renderQuestions(bool) {
    if (!bool) {
      return this.props.questions.map((question) => (
        <Question key={question._id} data={question} />
      ));
    } else {
      return this.props.questionsUpvotes.map((question) => (
        <Question key={question._id} data={question} />
      ));
    }
  }

  viewCount() {
    let n = Object.keys(this.props.questions).length;
    return (
      <p>
        Viewing <span className="view-count-style">{n}</span> of {this.props.dbSize} questions
      </p>
    );
  }

  toggleSort() {
    this.setState({sortBy: !this.state.sortBy});
  }

  sortView() {
    return !this.state.sortBy ? 'Recent' : 'Most viewed';
  }

  render() {
    return(
      <div>
        <div className="view-section">
          <div className="view-count">
            {this.viewCount()}
          </div>
          <div className="view-sort-by">
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
            <ul className="question-list">{this.renderQuestions(this.state.sortBy)}</ul>
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
    dbSize: Questions.find({}).count(),
  };
})(Recent);