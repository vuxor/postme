import React, { Component } from 'react';

import PostListContainer from '../../components/posts/PostListContainer.jsx';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      limit: 10,
    };
    this.setLimit = this.setLimit.bind(this);
  }
  setLimit() {
    this.setState({
      limit: this.state.limit + 5,
    });
  }
  render() {
    return (
      <div>
        <PostListContainer limit={this.state.limit} />
        <button onClick={() => this.setLimit()}>Load more</button>
      </div>
    );
  }
}
