import React, { Component } from 'react';


export default class Question extends Component {
  render() {
    return (
      <article className="question-card">
        <a 
          href={this.props.data.link} 
          target="_blank">{this.props.data.questionTitle}
        </a>
      </article>
    );
  }
}