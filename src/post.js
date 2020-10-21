import React, { Component } from 'react';
class Post extends Component {
  render(){
    return(
      <div className="post">
        <button className="cancel" onClick={this.props.removePost.bind(this,this.props.id)}><i className="far fa-times-circle"></i></button>
        <span className="post-title">{this.props.title}</span>
        <span className="post-description">{this.props.description}</span>
      </div>
    );
  }
}
export default Post;