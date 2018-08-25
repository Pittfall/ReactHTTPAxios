import React from 'react';
// Link can be used rather than NavLink but NavLink adds an 'active' css class.
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
  <li>
    {/* By default, the active class name is 'active'  */}
    <NavLink activeClassName="my-active" exact to={props.link}>{props.children}</NavLink>
  </li>
);

export default navigationItem;