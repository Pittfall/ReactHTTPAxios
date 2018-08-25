import React, { Component } from 'react';

import './Posts.css';
import Post from '../../components/Post/Post';
import { GetPosts } from '../../Http/API/API';

class Posts extends Component {
  state = {
    posts: [],
    error: false
  }

  componentDidMount () {
    GetPosts()
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
            return {
                ...post,
                author: "Andrew"
            }
        });
            
          this.setState({posts : updatedPosts});
      })
      .catch(error => {
          this.setState({error: true});
          console.log(error);
      });
  }

  render () {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
    
    if (!this.state.error) {
        posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author}  />
        });
    }

    return (
      <section className="Posts">
        {posts}
      </section>
    );
  }
}

export default Posts;