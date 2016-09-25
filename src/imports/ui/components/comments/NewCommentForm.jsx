import React, { Component, PropTypes } from 'react';

export default class NewCommentForm extends Component {
  render() {
    return (
      <form>
        <label>Comment:</label><input type="text" />
        <button>Submit</button>
      </form>
    );
  }
}

NewCommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
};
