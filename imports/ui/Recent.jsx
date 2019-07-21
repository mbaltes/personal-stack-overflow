import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Question from './Question';
import Questions from '../api/questions';

class Recent extends Component {
  renderQuestions() {
    //console.log(Object.keys(this.props.questions).length);
    return this.props.questions.map((question) => (
      <Question key={question._id} data={question} />
    ));
  }

  viewCount() {
    let n = Object.keys(this.props.questions).length;
    return (
      <p>
        Viewing <span className="view-count-style">{n}</span> of {this.props.dbSize} questions
      </p>
    );
  }

  render() {
    return(
      <div>
        <div className="view-count">
          {this.viewCount()}
        </div>
        <div className="recent-questions-section">
          <section className="card-container">
            <ul className="question-list">{this.renderQuestions()}</ul>
          </section>
        </div>
      </div>
    );
  }
}

export default withTracker((props) => {
  return {
    questions: Questions.find({questionTitle: {$regex: props.ss, $options: 'i'}}, { sort: { createdAt: -1 } }).fetch(),
    dbSize: Questions.find({}).count(),
  };
})(Recent);