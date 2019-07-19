import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Question from './Question';
import Questions from '../api/questions';

class MostUpvoted extends Component {

  renderQuestions() {
    return this.props.questions.map((question) => (
      <Question key={question._id} data={question} />
    ));
  }

  render() {
    return(
      <div className="most-upvoted-section">
        <section className="card-container">
          <h2>Most Upvoted</h2>
          <ul className="question-list">{this.renderQuestions()}</ul>
        </section>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    questions: Questions.find({}, { sort: { upvotes: -1 }, limit: 5 }).fetch(),
  };
})(MostUpvoted);