import React, { Component, PropTypes } from 'react';

import PostListContainer from './PostListContainer.jsx';

export default class PostListWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      skip: 0,
      hitLimit: false,
      loading: true,
    };
    this.increment = this.increment.bind(this);
    this.setParams = this.setParams.bind(this);
    this.hitLimitHandle = this.hitLimitHandle.bind(this);
    this.loadingHandle = this.loadingHandle.bind(this);
  }
  componentWillMount() {
    this.setState({
      limit: this.increment(),
    });
  }
  setParams() {
    const inc = this.increment();
    this.setState({
      limit: this.state.limit + inc,
      skip: this.state.skip + inc,
    });
  }
  increment() {
    return this.props.perPage || 10;
  }
  hitLimitHandle() {
    this.setState({
      hitLimit: true,
    });
  }
  loadingHandle(loading) {
    this.setState({ loading });
  }
  render() {
    return (
      <div>
        <PostListContainer
          hitLimitFunc={this.hitLimitHandle}
          loadingFunc={this.loadingHandle}
          skip={this.state.skip}
          limit={this.state.limit}
          sub={this.props.sub}
        />
        {(!this.state.hitLimit && !this.state.loading) &&
          <button onClick={() => this.setParams()}>Load more</button>
        }
        {this.state.loading && 'Loading...'}
      </div>
    );
  }
}

PostListWrapper.propTypes = {
  perPage: PropTypes.number,
  sub: PropTypes.string.isRequired,
};
