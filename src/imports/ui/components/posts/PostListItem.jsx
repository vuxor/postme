/* eslint no-underscore-dangle: 0 */
import React, { Component, PropTypes } from 'react';
import { vote } from '../../../api/posts/methods.js';

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.canModify = this.canModify.bind(this);
    this.canVote = this.canVote.bind(this);
    this.votePost = this.votePost.bind(this);
    this.isVoted = this.isVoted.bind(this);
    this.ownPost = this.ownPost.bind(this);
    this.numberOfComments = this.numberOfComments.bind(this);
  }
  canModify() {
    if (Meteor.userId()) {
      if (this.props.post.owner === Meteor.user().username) return true;
    }
    return false;
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
    let text;
    if (num) {
      if (num === 1) text = '1 comment';
      text = `${post.comments.length} comments`;
    }
    return text;
  }
  render() {
    const post = this.props.post;
    return (
      <div>
        <p><span>{post.title} - {post.owner}</span></p>
        <p>
          votes: {post.votes},
          {this.numberOfComments()},
          {this.canModify() &&
            <span>
              <button>Edit</button>
              <button>Delete</button>
            </span>
          },
          {(!this.isVoted() && !this.ownPost()) && <button onClick={this.votePost}>Vote</button>}
        </p>
        <div>{Meteor.userId() && <button>Discuss</button>}</div>
      </div>
    );
  }
}

PostListItem.propTypes = {
  post: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
};
