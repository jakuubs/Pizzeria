import React from 'react'
import "../styles/ShoppingCart.css";

const ShoppingCart = (props) => {
    return (
        <div className="shoppingCart">
            <h3>Cart items</h3>
            <button onClick={props.hideCart}>XXXXX</button>
        </div>
    )
}

export default ShoppingCart
