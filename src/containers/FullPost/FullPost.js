import React, { Component } from 'react';

import './FullPost.css';
import { GetPost, DeletePost } from '../../Http/API/API';

class FullPost extends Component {
    state = {
        selectedPost: null
    }

    componentDidMount () {
      this.loadData();
    }

    componentDidUpdate () {
      this.loadData();
    }

    loadData = () => {
      if (!this.props.match.params.postId) { return; }
      if (this.state.selectedPost && this.state.selectedPost.id === +this.props.match.params.postId) { return; }

      GetPost(this.props.match.params.postId)
        .then(response => {
            this.setState({selectedPost : response.data});
        });
    }

    deletePostHandler = () => {
        DeletePost(this.props.match.params.postId)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if (this.props.match.params.postId) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }

        if (this.state.selectedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.selectedPost.title}</h1>
                    <p>{this.state.selectedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;