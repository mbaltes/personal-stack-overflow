import React, { Component } from 'react';

import Questions from '../api/questions';


export default class Question extends Component {
  render() {
    return (
      <article className="question-card">
        <div className="question-card-link">
          <a 
            href={this.props.data.link} 
            target="_blank"
            onClick={this.handleUpvote.bind(this)}
          >
            {this.props.data.questionTitle}
          </a>
        </div>
        <div className="question-card-note">
          {this.props.data.notes}
        </div>
        <div className="question-card-bottom">
          <div className="question-card-tags">
            {this.props.data.tags.join(' ')}
          </div>
          <div className="question-card-delete">
            <a
              href="#"
              onClick={this.handleDelete.bind(this)}
            >
              x
            </a>
          </div>
        </div>
      </article>
    );
  }

  handleUpvote() {
    Questions.update({_id: this.props.data._id}, {$inc: {upvotes: 1}});
  }

  handleDelete() {
    Questions.remove(this.props.data._id);
  }
}