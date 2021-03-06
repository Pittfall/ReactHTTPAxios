import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems'
import Posts from '../Posts/Posts'
import NewPost from '../NewPost/NewPost';

class Blog extends Component {
    render () {
        return (
            <div>
                <NavigationItems />
                {/* Switch only loads one of the routes at a time.  The first one it finds from a given set. */}
                <Switch>
                  {/* Can render jsx */}
                  {/* <Route path="/" exact render={() => <Posts />} /> */} 
                  <Route path="/new-post" exact component={NewPost} />
                  <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;