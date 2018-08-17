import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        selectedPost: null
    }

    componentDidUpdate (prevProps) {
        if (!this.props.postId) {
            return;
        }

        if (prevProps.postId === this.props.postId) {
            return;
        
        }

        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.postId)
            .then(response => {
                this.setState({selectedPost : response.data});
            });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if (this.props.postId) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }

        if (this.state.selectedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.selectedPost.title}</h1>
                    <p>{this.state.selectedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;