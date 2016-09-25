/* eslint no-underscore-dangle: 0 */
import React, { PropTypes } from 'react';

import { vote } from '../../../api/posts/methods.js';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
    this.findUsername = this.findUsername.bind(this);
    this.comments = this.comments.bind(this);
    this.modifyButtons = this.modifyButtons.bind(this);
    this.canVote = this.canVote.bind(this);
    this.votePost = this.votePost.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    let listData = [];
    if (nextProps.skip === this.props.skip) {
      listData = nextProps.posts;
    } else {
      listData = this.state.listData.concat(
        nextProps.posts.slice(nextProps.skip, nextProps.posts.length)
      );
    }
    this.setState({ listData });
  }
  componentWillUnmount() {
    // this will remove duplication of data
    // when switch from best to home and oposite
    this.props.handle.stop();
  }
  canVote(post) {
    let youCanVote = true;
    if (post.private) youCanVote = false;
    if (post.userId === Meteor.userId()) youCanVote = false;
    if (post.voters.indexOf(Meteor.userId()) > -1) youCanVote = false;

    return youCanVote;
  }
  votePost(postId) {
    vote.call({
      postId,
    }, (err) => {
      if (err) {
        // handle the error here
      }
    });
  }
  modifyButtons(userId) {
    if (userId === Meteor.userId()) {
      return (
        <span>
          <button>Edit</button>
          <button>Delete</button>
        </span>
      );
    }
    return false;
  }
  findUsername(userId) {
    const currUser = this.props.users.find(user => user._id === userId);
    // this will remove errors in console but
    // it will cause flickering usernames
    return currUser ? currUser.username : '';
  }
  comments(post) {
    const num = post.comments.length;
    if (num) {
      if (num === 1) return '1 comment';
      return `${post.comments.length} comments`;
    }
    return 'no comments';
  }
  render() {
    const { loading } = this.props;
    const listDataDisplay = (
      this.state.listData.map((post, i) =>
        <div key={post._id}>
          <p><span>{i + 1}. {post.title} - {this.findUsername(post.userId)}</span></p>
          <p>
            votes: {post.votes},
            {this.comments(post)},
            {this.modifyButtons(post.userId)},
            {this.canVote(post) && <button onClick={() => this.votePost(post._id)}>Vote</button>}
          </p>
        </div>
      )
    );
    return (
      <div>
        {listDataDisplay}
        {loading && 'Loading...'}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  handle: PropTypes.object.isRequired,
  skip: PropTypes.number.isRequired,
};
