import React, {useContext, useState} from "react";
import CartContext from "../../store/Cart-Context";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = ({hideCartHandler}) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = `Rs. ${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem ({ ...item, amount:1 });
    };
    
    const orderHandler = () => {
        setIsCheckout(true);

    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
      await fetch('https://react-demo-22242-default-rtdb.firebaseio.com/orders.json', {
            method : 'POST',
            body: JSON.stringify({
                user:userData,
                orderedItems : cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    }

    const CartItems = (
    //     <ul className={classes['cart-items']}>
    //      {
    //     //  [{id: 'c1', name:'Janu', amount:2, price:120}]
    //     cartCtx.items
    //      .map((item) => (
    //     <li>{item.name}</li>
    // ))}</ul>
    // );
    <ul className={classes['cart-items']}>
    {cartCtx.items.map((item) => (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    ))}
  </ul>
    );


    // const hideCartHandler = () => {
    //     setCartIsShown(false);
    // }

    const modalActions = (
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={()=>hideCartHandler(false)}>Close</button>
        {/* <button className={classes['button--alt']} onClick={props.onClose}>Close</button> */}

        {hasItems && (<button className={classes.button} onClick={orderHandler}>Order</button>)}
    </div>
    );

    const cartModalContent = (
        <React.Fragment>
              {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
                {/* <span>350</span> */}
            </div>
            {isCheckout && <Checkout onConfirm = {submitOrderHandler} onCancel = {()=> hideCartHandler(false)}/>}
            {!isCheckout && modalActions }

        </React.Fragment>
    );

    const isSubmittingModalContent = <p>Sending Order Data...</p>;

    const didSubmitModalContent =<React.Fragment>
         <p>Successfully sent the order</p>
         <div className={classes.actions}>
        <button className={classes.button} onClick={()=>hideCartHandler(false)}>Close</button>
        {/* <button className={classes['button--alt']} onClick={props.onClose}>Close</button> */}

       
    </div>
    </React.Fragment>

    return(
        <Modal >
          
            {!isSubmitting && !didSubmit  && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>

    );
}

export default Cart;