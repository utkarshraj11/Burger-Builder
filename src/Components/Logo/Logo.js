import React from 'react';
import BurgerLogo from '../../../src/assets/images/burger-logo.png'
import classes from './Logo.css'
const Logo =(props)=>(
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="MyBurger"/>
    </div>
)
    


export default Logo;