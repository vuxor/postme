import React, { Component, PropTypes } from 'react';

export default class PostDeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletePost: false,
    };
    this.handleDeletePost = this.handleDeletePost.bind(this);
  }
  componentDidMount() {
    $('#confirm-delete').openModal({
      complete: () => this.props.closeModalcb(this.state.deletePost),
    });
  }
  handleDeletePost(e) {
    e.preventDefault();
    this.setState({
      deletePost: true,
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
            onClick={this.handleDeletePost}
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
  closeModalcb: PropTypes.func.isRequired,
};
