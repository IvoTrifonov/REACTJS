import React, { Component } from 'react';
import './Posts.css';
import Post from './Post/Post';
import postService from '../services/post-service';

class Posts extends Component {
  state = {
    posts: null,
  }
  
  getPosts = (posts) => {
    return posts.map(post => {
      return <Post 
              key={post.id} 
              imageUrl="/blue-origami-bird.png" 
              imageAlt="someAlt" 
              author={post.userId}>{post.body}</Post>
    });
  }

  render() {
    const { posts } = this.state;
    return posts ? <div className="Posts">
    {this.getPosts(posts)}
    </div> : <div>Loading...</div>
  }

  componentDidMount() {
    postService.load().then(posts => {
        this.setState({ posts: posts })
    });
  }
}

export default Posts;