/* eslint no-underscore-dangle: 0 */
import React, { Component, PropTypes } from 'react';
import { vote } from '../../../api/posts/methods.js';

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.canModify = this.canModify.bind(this);
    this.canVote = this.canVote.bind(this);
    this.votePost = this.votePost.bind(this);
  }
  canModify() {
    return this.props.post.owner === Meteor.user().username;
  }
  canVote() {
    const post = this.props.post;
    let youCanVote = true;
    if (post.private) youCanVote = false;
    if (post.owner === Meteor.user().username) youCanVote = false;
    if (post.voters.indexOf(Meteor.userId()) > -1) youCanVote = false;

    return youCanVote;
  }
  votePost(e, postId = this.props.post._id) {
    vote.call({
      postId,
    }, (err) => {
      if (err) {
        // handle the error here
      }
    });
  }
  render() {
    const post = this.props.post;
    return (
      <div>
        <p><span>{post.title} - {post.owner}</span></p>
        <p>
          votes: {post.votes},
          {/* {this.comments(post)}, */}
          {this.canModify() &&
            <span>
              <button>Edit</button>
              <button>Delete</button>
            </span>
          },
          {this.canVote() && <button onClick={this.votePost}>Vote</button>}
        </p>
        <div>{Meteor.userId() ? 'you can add comments' : 'Please login to add comments'}</div>
      </div>
    );
  }
}

PostListItem.propTypes = {
  post: PropTypes.object.isRequired,
};
