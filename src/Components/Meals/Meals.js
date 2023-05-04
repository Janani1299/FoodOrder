import React, { Fragment, useState } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import Cart from "../Cart/Cart";

const Meals = ({cartIsShown,  hideCartHandler}) => {
console.log("shown");
    // const [cartIsShown, setCartIsShown] = useState(false);

    // const showCartHandler = () => {
    //     setCartIsShown(true);
    // }

    // const hideCartHandler = () => {
    //     setCartIsShown(false);
    // }

    return (
        <Fragment style={{backgroundColor: "#383838"}}>
            <MealsSummary/>
            <AvailableMeals/>
            {/* <Cart/> */}
           {cartIsShown && <Cart  hideCartHandler={hideCartHandler}/> } 
        </Fragment>

    )
};

export default Meals;