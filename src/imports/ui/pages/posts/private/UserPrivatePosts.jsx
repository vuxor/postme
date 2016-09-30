import React from 'react';

import PostListWrapper from '../../../components/posts/PostListWrapper.jsx';

const UserPrivatePosts = () =>
  <div>
    <h2 className="header">My private posts</h2>
    <PostListWrapper
      perPage={5}
      sub={'Posts.user.private'}
    />
  </div>;

export default UserPrivatePosts;
