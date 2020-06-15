import React from 'react';
import classes from './NavigationItem.css';
import {NavLink} from 'react-router-dom';


const NavigationItem =(props)=>(
    <li className={classes.NavigationItem}>
        <NavLink
        exact={props.exact}
        activeClassName={classes.active}
        to={props.link}
        >{props.children}</NavLink>
    </li>
);

export default NavigationItem;