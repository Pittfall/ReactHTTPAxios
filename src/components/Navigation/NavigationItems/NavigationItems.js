import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import '../Navigation.css'

const navigationItems = () => (
  <header>
    <nav className="Navigation">
      <ul>
        <NavigationItem link="/Posts">Posts</NavigationItem>
        <NavigationItem link="/new-post">New Post</NavigationItem>
      </ul>
    </nav>
  </header>
);

export default navigationItems;