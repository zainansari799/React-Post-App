import React, { Component } from 'react';
import PostList from './postlist'
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <PostList />
      </div>
    );
  }
}

export default App;
