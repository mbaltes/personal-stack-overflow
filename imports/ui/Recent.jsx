import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Question from './Question';
import Questions from '../api/questions';

class Recent extends Component {
  renderQuestions() {
    return this.props.questions.map((question) => (
      <Question key={question._id} data={question} />
    ));
  }

  render() {
    return(
      <div className="recent-questions-section">
        <section className="card-container">
          <ul className="question-list">{this.renderQuestions()}</ul>
        </section>
      </div>
    );
  }
}

export default withTracker((props) => {
  return {
    questions: Questions.find({questionTitle: {$regex: props.ss, $options: 'i'}}, { sort: { createdAt: -1 } }).fetch(),
  };
})(Recent);