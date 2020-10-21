import React, { Component } from 'react';

var x = 0;
class PostForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: 0,  
      title: '',
      description: ''
    }
    this.submit = this.submit.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }
  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangeDescription(event) {
    this.setState({description: event.target.value});
  }
  submit(e){
    e.preventDefault();
    this.setState({ title: this.state.title, description: this.state.description, id: x });
    x++;
    var posts = {
      id: x,
      title: this.state.title,
      description: this.state.description
    }
    this.props.handleCreate(posts);
  
    this.setState({ title: '', description: '' });
  }

  render(){
    return (
      <div className="post-form">
        <form onSubmit={this.submit}>
        <input type="text" value={this.state.title} placeholder="Post title" name="postTitle" onChange={this.handleChangeTitle} />
        <textarea rows="10" value={this.state.description} placeholder="What's in your mind?" title="postDescription" onChange={this.handleChangeDescription} />
        <button>Share</button>
        <div className="clearfix"></div>
        </form>
      </div>
    )
  }
};
export default PostForm