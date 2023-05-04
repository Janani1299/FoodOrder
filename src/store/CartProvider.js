import { useReducer } from 'react';

import CartContext from "./Cart-Context";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
    //working on add button
  if (action.type === 'ADD') {

    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];

        // let updatedItem;
        let updatedItems;

        if(existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            // updatedItem = {...action.item};
            // const updatedItems = state.items.concat(action.item);
             updatedItems = state.items.concat(action.item);
        }
        return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  //working on removable button
  if(action.type === 'REMOVE') {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1) {
            updatedItems = state.items.filter(item =>item.id !== action.id);
        }else {
            const updatedItem = {...existingItem, amount : existingItem.amount -1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem; 

        }
        return {
            items : updatedItems,
            totalAmount:updatedTotalAmount
        };
    }

    if(action.type === 'CLEAR') {
     
        return defaultCartState; 
    }
    

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const clearcartHandler = () => {
    dispatchCartAction({type:'CLEAR'});
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart : clearcartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
























// import React, {useReducer} from "react";
// import CartContext from "./Cart-Context";

// const defaultCartState =  {
//     items:[],
//     totalAmount:0,
// };

// const cartReducer = (state, action) => {
//     if(action.type === 'ADD') {
//         const updatedItems = state.items.concat(action.item);
//         const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
//         return {
//             items : updatedItems,
//             totalAmount : updatedTotalAmount
//     };
//     }
//     return defaultCartState;
// };

// const CartProvider = (props) => {

//     const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

//     const addItemToCartHandler = (item) => {
//         dispatchCartAction({type:'ADD', item:item});
//     };

//     const removeItemFromCartHandler = (id) => {
//         dispatchCartAction({type:'REMOVE', id:id});
//     };

//     const CartContext = {
//         // items:[],
//         // totalAmount:0,
//         items:cartState.items,
//         totalAmount : cartState.totalAmount,
//         addItem :addItemToCartHandler, 
//         removeItem:removeItemFromCartHandler, 
    
//     };
//     return (
//          <CartContext.Provider value={CartContext}>
//              {props.children}
//          </CartContext.Provider>
//     )
// }

// export default CartProvider;