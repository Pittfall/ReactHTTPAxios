import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems'
import Posts from '../Posts/Posts'
import NewPost from '../NewPost/NewPost';

class Blog extends Component {
    render () {
        return (
            <div>
                <NavigationItems />
                {/* Can render jsx */}
                {/* <Route path="/" exact render={() => <Posts />} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
            </div>
        );
    }
}

export default Blog;