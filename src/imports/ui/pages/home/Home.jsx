import React from 'react';

import PostListWrapper from '../../components/posts/PostListWrapper.jsx';

const Home = () => (
  <div>
    <PostListWrapper
      perPage={10}
      sub={'Posts.public'}
    />
  </div>
);
export default Home;
