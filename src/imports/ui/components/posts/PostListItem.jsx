/* eslint no-underscore-dangle: 0 */
import React, { Component, PropTypes } from 'react';
import { vote } from '../../../api/posts/methods.js';

import CommentsWrapper from '../comments/CommentsWrapper.jsx';

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
    };
    this.canVote = this.canVote.bind(this);
    this.votePost = this.votePost.bind(this);
    this.isVoted = this.isVoted.bind(this);
    this.ownPost = this.ownPost.bind(this);
    this.numberOfComments = this.numberOfComments.bind(this);
    this.showComments = this.showComments.bind(this);
  }
  componentDidMount() {
    $('.modal-trigger').leanModal();
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
          // handle the error here
        }
      });
    } else {
      console.log('you must login first');
    }
  }
  isVoted(currentUser = this.props.currentUser) {
    if (!!currentUser) {
      if (this.props.post.voters.indexOf(currentUser._id) > -1) return true;
    }
    return false;
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
  render() {
    const post = this.props.post;
    return (
      <div>
        <p><span>{post.title} - {post.owner}</span></p>
        <p>
          votes: {post.votes},
          {this.numberOfComments()},
          {this.ownPost() &&
            <span>
              <a className="modal-trigger waves-effect waves-light btn" href="#postModal">Edit</a>
              <button>Delete</button>
            </span>
          },
          {(!this.isVoted() && !this.ownPost()) && <button onClick={this.votePost}>Vote</button>}
        </p>

        <div id="postModal" className="modal">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>

        <div>{<button onClick={this.showComments}>Discuss</button>}</div>
        {this.state.showComments &&
          <CommentsWrapper {...this.props} />}
      </div>
    );
  }
}

PostListItem.propTypes = {
  post: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
};
