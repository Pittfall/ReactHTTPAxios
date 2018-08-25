import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Posts.css';
import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
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

  postClickHandler = (id) => {
    this.props.history.push({pathname: '/Posts/' + id})
  }

  render () {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
    
    if (!this.state.error) {
        posts = this.state.posts.map(post => {
            return (
                <Post 
                  key={post.id} 
                  title={post.title} 
                  author={post.author} 
                  clicked={() => this.postClickHandler(post.id)} />
            );
        });
    }

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + "/:postId" } exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;