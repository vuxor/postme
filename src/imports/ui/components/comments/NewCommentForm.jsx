import React, { Component, PropTypes } from 'react';
import { newComment } from '../../../api/posts/methods.js';

export default class NewCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
    this.postNewComment = this.postNewComment.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(e) {
    this.setState({
      comment: e.target.value,
    });
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
      <form className="new-comment-form" onSubmit={this.postNewComment}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="newCommentText"
              type="text"
              className="validate"
              value={this.state.comment}
              onChange={this.handleTextChange}
              required
            />
            <label htmlFor="newCommentText">
              Comment
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

NewCommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
};
