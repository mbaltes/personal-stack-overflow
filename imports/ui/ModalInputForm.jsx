import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Questions from '../api/questions';


export default class ModalInputForm extends Component {
  render() {
    return(
      <div className="main-form-div">
        <form 
          className="add-form"
          onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              ref="url"
              placeholder="Link address"
              autoFocus
              onChange={this.handleChange.bind(this)}
            />
            <br/>
            <input
              type="text"
              ref="title"
              placeholder="Title"
            />
            <br/>
            <input
              type="text"
              ref="tags"
              placeholder="Tags (comma separated)"
            />
            <br/>
            <textarea 
              type="textarea"
              ref="notes"
              placeholder="Note"
            />
            <br/>
            <input type="submit" value="Submit"></input>
        </form> 
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    const link = ReactDOM.findDOMNode(this.refs.url).value.trim();
    const tags = ReactDOM.findDOMNode(this.refs.tags).value.trim().split(", ");
    const notes = ReactDOM.findDOMNode(this.refs.notes).value.trim();
    const questionTitle = ReactDOM.findDOMNode(this.refs.title).value.trim();

    Questions.insert({
      questionTitle: questionTitle,
      link: link,
      tags: tags,
      upvotes: 1,
      notes: notes,
      createdAt: new Date(),
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.url).value = '';
    ReactDOM.findDOMNode(this.refs.tags).value = '';
    ReactDOM.findDOMNode(this.refs.notes).value = '';
    ReactDOM.findDOMNode(this.refs.title).value = '';
  }

  handleSOLink(link) {
    let tmp = link.slice(link.lastIndexOf("/") + 1, link.length).replace(/-/g, ' ');
    
    return tmp.charAt(0).toUpperCase() + tmp.slice(1);
  }

  handleChange() {
    let tmp = ReactDOM.findDOMNode(this.refs.url).value.trim();
    ReactDOM.findDOMNode(this.refs.title).value = this.handleSOLink(tmp);
  }
}