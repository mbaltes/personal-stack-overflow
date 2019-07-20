import React, { Component } from 'react';

import Questions from '../api/questions';


export default class Question extends Component {
  render() {
    return (
      <article className="question-card">
        <a 
          href={this.props.data.link} 
          target="_blank"
          onClick={this.handleUpvote.bind(this)}
        >
          {this.props.data.questionTitle}
        </a>
        <p>
          {this.props.data.notes}
          <br/>
          {this.props.data.upvotes}
          <br/>
          {this.props.data.tags.join(' ')}
        </p>
      </article>
    );
  }

  handleUpvote() {
    Questions.update({_id: this.props.data._id}, {$inc: {upvotes: 1}});
  }
}