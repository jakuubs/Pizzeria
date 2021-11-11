import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../styles/Header.css';
import pizza from '../images/pizza_planet.png'
import ShoppingCart from './ShoppingCart';

const Header = ({pizzas, sauces, changeQuantity}) => {

    const [isCartVisible, setIsCartVisible] = useState(false);

    let history = useHistory();

    const redirect = () => {
        history.push('/');
    }

    const showShoppingCart = () => { 
        setIsCartVisible(!isCartVisible);
    }

    return (
        <div className="header">
            <img alt="Pizza Planet" src={pizza} onClick={redirect}/>
            <button onClick={showShoppingCart}>Shopping Cart</button>
            { isCartVisible && <ShoppingCart hideCart={showShoppingCart} pizzas={pizzas} sauces={sauces} changeQuantity={changeQuantity} /> }
        </div>
    )
}

export default Header
