import React, {Fragment, useState} from 'react';
import mealsImage from "../../assets/mealsimage.jpg";
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import Meals from '../Meals/Meals';

const Header =() => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = (value) => {
        setCartIsShown(value);
        console.log(cartIsShown );
    }
    console.log(cartIsShown );

    const hideCartHandler = (hide) => {
        setCartIsShown(hide);
    }

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>JJMeals</h1>
                <HeaderCartButton showCartHandler={showCartHandler}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food"/>
            </div>
        <Meals cartIsShown={cartIsShown}  hideCartHandler={hideCartHandler}/>
        </Fragment>
        
    )
};

export default Header;