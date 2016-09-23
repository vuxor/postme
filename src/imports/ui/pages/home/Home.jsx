import React, { Component } from 'react';

import PostListContainer from '../../components/posts/PostListContainer.jsx';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      limit: 10,
      skip: 0,
    };
    this.setParams = this.setParams.bind(this);
  }
  setParams() {
    this.setState({
      limit: this.state.limit + 10,
      skip: this.state.skip + 10,
    });
  }
  render() {
    return (
      <div>
        <PostListContainer skip={this.state.skip} limit={this.state.limit} />
        <button onClick={() => this.setParams()}>Load more</button>
      </div>
    );
  }
}
