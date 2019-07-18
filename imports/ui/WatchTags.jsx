import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Question from './Question';
import Questions from '../api/questions';

class WatchTags extends Component {

  renderQuestions() {
    return this.props.questions.map((question) => (
      <Question key={question._id} data={question} />
    ));
  }

  render() {
    return(
      <section className="card-container">
        <h2>Watched Tags</h2>
        <ul className="question-list">{this.renderQuestions()}</ul>
      </section>
    );
  }
}

export default withTracker(() => {
  return {
    questions: Questions.find({}, { sort: { upvotes: -1 }, limit: 10 }).fetch(),
  };
})(WatchTags);