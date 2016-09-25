import React, { Component, PropTypes } from 'react';
import { newComment } from '../../../api/posts/methods.js';

export default class NewCommentForm extends Component {
  constructor(props) {
    super(props);
    this.postNewComment = this.postNewComment.bind(this);
  }
  postNewComment(e) {
    e.preventDefault();
    const input = document.getElementById('newCommentText');
    const text = input.value.trim();
    newComment.call({
      postId: this.props.postId,
      text,
    }, (err) => {
      if (err) {
        // handle the error here
      }
      input.value = '';
    });
  }
  render() {
    return (
      <form onSubmit={this.postNewComment}>
        <label>Comment:</label><input id="newCommentText" type="text" required />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

NewCommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
};
