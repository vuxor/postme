import React, { Component, PropTypes } from 'react';
import { deletePostMethod } from '../../../api/posts/methods.js';
import { Materialize } from 'meteor/materialize:materialize';

export default class PostDeleteModal extends Component {
  constructor(props) {
    super(props);
    this.deletePost = this.deletePost.bind(this);
  }
  componentDidMount() {
    $('#confirm-delete').openModal();
  }
  deletePost(e, postId = this.props.postId) {
    e.preventDefault();
    deletePostMethod.call({
      postId,
    }, (err) => {
      if (err) {
        Materialize.toast(err.reason, 4000);
      } else {
        Materialize.toast('Post deleted', 4000);
      }
    });
  }
  render() {
    return (
      <div id="confirm-delete" className="modal">
        <div className="modal-content">
          <h4>Are you sure to delete this post?</h4>
          <p>This action can not be undone</p>
        </div>
        <div className="modal-footer">
          <a
            className="red modal-action modal-close waves-effect waves-green btn"
            onClick={this.deletePost}
          >
            Delete
          </a>
          <a className=" modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
        </div>
      </div>
    );
  }
}

PostDeleteModal.propTypes = {
  postId: PropTypes.string.isRequired,
};
