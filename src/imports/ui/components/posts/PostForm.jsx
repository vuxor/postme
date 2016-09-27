/* eslint no-underscore-dangle: 0 */
import React, { Component, PropTypes } from 'react';
import { insertPost, updatePost } from '../../../api/posts/methods.js';
import { Materialize } from 'meteor/materialize:materialize';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: '',
      postText: '',
      postUrl: '',
      postIsPrivate: false,
      active: false,
    };
    this.savePost = this.savePost.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  componentWillMount(post = this.props.post) {
    if (!!post) {
      this.setState({
        postTitle: post.title,
        postText: post.text,
        postUrl: post.url,
        postIsPrivate: post.isPrivate,
        active: true,
      });
    }
  }
  handleFormChange(e) {
    const element = e.target;
    switch (element.id) {
      case 'postTitle':
        this.setState({
          postTitle: element.value,
        });
        break;
      case 'postText':
        this.setState({
          postText: element.value,
        });
        break;
      case 'postUrl':
        this.setState({
          postUrl: element.value,
        });
        break;
      case 'postIsPrivate':
        this.setState({
          postIsPrivate: element.checked,
        });
        break;
      default:
        Materialize.toast('Unknown id', 4000);
    }
  }
  savePost(e, post = this.props.post) {
    e.preventDefault();
    const title = document.getElementById('postTitle');
    const text = document.getElementById('postText');
    const url = document.getElementById('postUrl');
    const isPrivate = document.getElementById('postIsPrivate');
    const postData = {};
    postData.title = title.value.trim();
    postData.text = text.value.trim();
    postData.url = url.value.trim();
    postData.isPrivate = isPrivate.checked;
    if (!!post) {
      postData.postId = post._id;
      updatePost.call({
        postData,
      }, (err) => {
        if (err) {
          Materialize.toast(err.reason, 4000);
        }
        this.props.hideForm();
        Materialize.toast('You successufully updated post', 4000);
      });
    } else {
      insertPost.call({
        postData,
      }, (err) => {
        if (err) {
          Materialize.toast(err.reason, 4000);
        }
        title.value = '';
        text.value = '';
        url.value = '';
        isPrivate.checked = false;
        $('#postModal').closeModal();
        Materialize.toast('You successufully inserted new post', 4000);
      });
    }
  }
  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.savePost}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="postTitle"
                type="text"
                className="validate"
                value={this.state.postTitle}
                onChange={this.handleFormChange}
                required
              />
              <label htmlFor="postTitle" className={this.state.active && 'active'}>
                Title
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                value={this.state.postText}
                onChange={this.handleFormChange}
                id="postText"
                className="materialize-textarea"
              >
              </textarea>
              <label htmlFor="postText" className={this.state.active && 'active'}>Text</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="postUrl"
                type="text"
                className="validate"
                value={this.state.postUrl}
                onChange={this.handleFormChange}
                required
              />
              <label htmlFor="postUrl" className={this.state.active && 'active'}>
                URL
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                checked={this.state.postIsPrivate}
                type="checkbox"
                id="postIsPrivate"
                onChange={this.handleFormChange}
              />
              <label htmlFor="postIsPrivate">Private</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  post: PropTypes.object,
  hideForm: PropTypes.func,
};
