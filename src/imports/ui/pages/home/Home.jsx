import React, { Component } from 'react';

import PostListContainer from '../../components/posts/PostListContainer.jsx';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      limit: 10,
      skip: 0,
      hitLimit: false,
    };
    this.setParams = this.setParams.bind(this);
    this.hitLimitHandle = this.hitLimitHandle.bind(this);
  }
  setParams() {
    this.setState({
      limit: this.state.limit + 10,
      skip: this.state.skip + 10,
    });
  }
  hitLimitHandle() {
    this.setState({
      hitLimit: true,
    });
  }
  render() {
    return (
      <div>
        <PostListContainer
          hitLimitFunc={this.hitLimitHandle}
          skip={this.state.skip}
          limit={this.state.limit}
        />
        {this.state.hitLimit ? '' :
          <button onClick={() => this.setParams()}>Load more</button>
        }
      </div>
    );
  }
}
