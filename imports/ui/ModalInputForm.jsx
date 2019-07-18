import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Questions from '../api/questions';


export default class ModalInputForm extends Component {
  render() {
    return(
      <form 
        className="add-form"
        onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            ref="title"
            placeholder="Question"
          />
          <br/>
          <input
            type="text"
            ref="url"
            placeholder="Link address"
          />
          <br/>
          <input
            type="text"
            ref="tags"
            placeholder="Tags (comma separated)"
          />
          <br/>
          <input 
            type="textarea"
            ref="notes"
            placeholder="Note"
          />
          <br/>
          <input type="submit" value="Submit"></input>
      </form> 
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    const questionTitle = ReactDOM.findDOMNode(this.refs.title).value.trim();
    const link = ReactDOM.findDOMNode(this.refs.url).value.trim();
    const tags = ReactDOM.findDOMNode(this.refs.tags).value.trim().split(", ");
    const notes = ReactDOM.findDOMNode(this.refs.notes).value.trim();

    // console.log(title);
    // console.log(url);
    // console.log(notes);
    // console.log(tags);

    Questions.insert({
      questionTitle: questionTitle,
      link: link,
      tags: tags,
      upvotes: 1,
      notes: notes,
      createdAt: new Date(),
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.title).value = '';
    ReactDOM.findDOMNode(this.refs.url).value = '';
    ReactDOM.findDOMNode(this.refs.tags).value = '';
    ReactDOM.findDOMNode(this.refs.notes).value = '';
  }
}