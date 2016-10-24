/* eslint no-underscore-dangle: 0 */
import React, { Component, PropTypes } from 'react';
import { vote, deletePostMethod } from '../../../api/posts/methods.js';
import { Materialize } from 'meteor/materialize:materialize';

import CommentsWrapper from '../comments/CommentsWrapper.jsx';
import PostForm from './PostForm.jsx';
import PostDeleteModal from './PostDeleteModal.jsx';

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
      showForm: false,
      showDeleteModal: false,
    };
    this.canVote = this.canVote.bind(this);
    this.votePost = this.votePost.bind(this);
    this.isVoted = this.isVoted.bind(this);
    this.ownPost = this.ownPost.bind(this);
    this.numberOfComments = this.numberOfComments.bind(this);
    this.showComments = this.showComments.bind(this);
    this.showUpdateForm = this.showUpdateForm.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }
  hideModal(deletePost) {
    if (!deletePost) {
      this.setState({
        showDeleteModal: false,
      });
    } else {
      this.deletePost(this.props.post._id);
    }
  }
  deletePost(postId) {
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
  canVote() {
    const post = this.props.post;
    let youCanVote = true;
    if (post.private) youCanVote = false;
    if (Meteor.userId()) {
      if (post.owner === Meteor.user().username) youCanVote = false;
      if (post.voters.indexOf(Meteor.userId()) > -1) youCanVote = false;
    } else {
      youCanVote = false;
    }

    return youCanVote;
  }
  votePost(e, postId = this.props.post._id) {
    if (this.canVote()) {
      vote.call({
        postId,
      }, (err) => {
        if (err) {
          Materialize.toast(err.reason, 4000);
        }
      });
    } else {
      Materialize.toast('You must login first', 4000);
    }
  }
  isVoted(currentUser = this.props.currentUser) {
    if (!!currentUser) {
      if (this.props.post.voters.indexOf(currentUser._id) > -1) return true;
    }
    return false;
  }
  confirmDelete() {
    this.setState({
      showDeleteModal: true,
    });
  }
  ownPost(currentUser = this.props.currentUser) {
    if (!!currentUser) {
      if (currentUser.username === this.props.post.owner) return true;
    }
    return false;
  }
  numberOfComments(post = this.props.post) {
    const num = post.comments.length;
    let text = 'no comments';
    if (num) {
      if (num === 1) {
        text = '1 comment';
      } else {
        text = `${post.comments.length} comments`;
      }
    }
    return text;
  }
  showComments() {
    this.setState({ showComments: !this.state.showComments });
  }
  showUpdateForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }
  render() {
    const post = this.props.post;
    return (
      <div className="post-list-item">
        <div className="row">
          <div onClick={this.showComments} className="col s2 discuss">
            <i className="medium material-icons">comment</i>
            <p>Discuss</p>
          </div>
          <div className="col s8 post-details">
            <div>
              <h5 className="truncate">
                <a href="">{post.title}</a>
              </h5>
              <span>{post.url}</span>
            </div>
            <div className="second-row">
              <span>submitted by <b>{post.owner}</b></span>
              <span>, votes:&nbsp;<b>{post.votes}</b></span>
              <span className="right">{this.numberOfComments()}</span>
            </div>
          </div>
          <div className="col s2 post-buttons">
            <span>
              {this.ownPost() &&
                <span>
                  <a
                    onClick={this.showUpdateForm}
                    className="edit-post-btn waves-effect waves-light btn"
                  >
                    Edit
                  </a>
                  <a
                    onClick={this.confirmDelete}
                    className="red waves-effect waves-light btn"
                  >
                    Delete
                  </a>
                </span>
              }
              {(!this.isVoted() && !this.ownPost()) &&
                <a
                  onClick={this.votePost}
                  className="blue lighten-1 modal-trigger waves-effect waves-light btn"
                >
                  Vote
                </a>
              }
            </span>
          </div>
        </div>
        {this.state.showComments &&
          <CommentsWrapper {...this.props} />}
        {this.state.showForm && <PostForm post={post} hideForm={this.showUpdateForm} />}
        {this.state.showDeleteModal &&
          <PostDeleteModal postId={this.props.post._id} closeModalcb={this.hideModal} />
        }
      </div>
    );
  }
}

PostListItem.propTypes = {
  post: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
};
