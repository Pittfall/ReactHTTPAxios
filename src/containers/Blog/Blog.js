import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems'
import Posts from '../Posts/Posts'

class Blog extends Component {
    render () {
        return (
            <div>
                <NavigationItems />
                {/* Can render jsx */}
                {/* <Route path="/" exact render={() => <Posts />} /> */}
                <Route path="/" exact component={Posts} />
            </div>
        );
    }
}

export default Blog;