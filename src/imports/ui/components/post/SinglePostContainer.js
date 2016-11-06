import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Posts } from '../../../api/posts/posts';
import SinglePost from './SinglePost.jsx';

export default createContainer(props => {
  const postHandle = Meteor.subscribe('Posts.singlePost', props.params.id);
  const loading = !postHandle.ready();
  return {
    post: Posts.findOne(props.params.id),
    loading,
  };
}, SinglePost);
