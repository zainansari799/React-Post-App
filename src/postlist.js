import React, { Component } from 'react';
import PostForm from './postform';
import Post from './post'

class PostList extends Component{
  constructor(){
    super();
    this.state = {
      postList: []
    }
    this.removePost = this.removePost.bind(this);
  }
  createPost(post){
    this.setState({ postList: this.state.postList.concat(post) });
  }

  removePost( deleteItem ) {
    var x = this.state.postList.filter((el) => {
      return el.id != deleteItem
    });
    this.setState({postList: x});
  }
  
  render(){
    var component = this;
    var posts = this.state.postList.map(function(post, key){
      return(
          <Post key={key} id={post.id} title={post.title} description={post.description} removePost={component.removePost}/>
      );
    });
    return(
      <div>
        <PostForm handleCreate={this.createPost.bind(this)}/>
        <div className="post-list">{posts}</div>
      </div>
    );
  }
};

export default PostList