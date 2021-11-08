import React from 'react'
import { useHistory } from 'react-router-dom';
import '../styles/Header.css';
import pizza from '../images/pizza_planet.png'

const Header = () => {

    let history = useHistory();

    const redirect = () => {
        history.push('/');
    }

    return (
        <div className="header">
            <img alt="Pizza Planet" src={pizza} onClick={redirect}/>
        </div>
    )
}

export default Header
