import React, { Component } from 'react';

import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems'
import Posts from '../Posts/Posts'

class Blog extends Component {
    render () {
        return (
            <div>
                <NavigationItems />
                <Posts />
            </div>
        );
    }
}

export default Blog;