import React, { Component, PropTypes } from 'react';
import { insertPost } from '../../../api/posts/methods.js';
import { Materialize } from 'meteor/materialize:materialize';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.savePost = this.savePost.bind(this);
  }
  savePost(e, post = this.props.post) {
    e.preventDefault();
    const title = document.getElementById('postTitle');
    const text = document.getElementById('postText');
    const url = document.getElementById('postUrl');
    const isPrivate = document.getElementById('postPrivate');
    const postData = {};
    postData.title = title.value.trim();
    postData.text = text.value.trim();
    postData.url = url.value.trim();
    postData.isPrivate = isPrivate.checked;
    if (!!post) {
      console.log('update');
    } else {
      insertPost.call({
        postData,
      }, (err) => {
        if (err) {
          // handle the error here
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
                required
              />
              <label htmlFor="postTitle">
                Title
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="postText" className="materialize-textarea"></textarea>
              <label htmlFor="postText">Text</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="postUrl"
                type="text"
                className="validate"
                required
              />
              <label htmlFor="postUrl">
                URL
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="checkbox" id="postPrivate" />
              <label htmlFor="postPrivate">Private</label>
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
};
