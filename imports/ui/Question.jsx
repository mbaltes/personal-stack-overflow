import React, { Component } from 'react';

import Questions from '../api/questions';


export default class Question extends Component {
  render() {
    return (
      <article className="question-card">
        <a 
          href={this.props.data.link} 
          target="_blank">{this.props.data.questionTitle}
        </a>
        <button 
          className="upvote-button" 
          onClick={this.handleUpvote.bind(this)}
        >
          {this.props.data.upvotes}
        </button>
      </article>
    );
  }

  handleUpvote() {
    Questions.update({_id: this.props.data._id}, {$inc: {upvotes: 1}});
  }
}