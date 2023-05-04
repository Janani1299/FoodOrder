import React, {useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/Cart-Context";
// import { AiOutlineShoppingCart } from "react-icons/ai";

const HeaderCartButton = ({showCartHandler}) => {

    const [btnIsHighLighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;

    //reduce()= transform array into single value - 3arguments (1-function, 2-starting value, 3-)
    const numberOfCartItems = items.reduce((curNumber, item)=> {
        return curNumber + item.amount;
    }, 0);


   

    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        //cleanup function timer

        return () => {
            clearTimeout(timer);
        };

    }, [items]);
    return (
        // <button className={classes.button} onClick={()=>showCartHandler(true)}>
        <button className={btnClasses} onClick={()=>showCartHandler(true)}>
            <span className={classes.icon}>
                <CartIcon/>
            {/* <AiOutlineShoppingCart/> */}
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>

        </button>

    )
};

export default HeaderCartButton;