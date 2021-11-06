import React from 'react'
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

const Menu = () => {
    
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                await fetch("http://localhost:3333/api/pizza")
                .then(response => response.json())
                .then(data => setPizzas(data))
            } catch (error) {
                setHasError(true);
            }
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            <ul>
                { hasError && <p>Something went wrong!</p> }
                { isLoading ? (
                    <Loader
                    type="Circles"
                    color="#FFFFFF"
                    height={100}
                    width={100} />) : pizzas.map(pizza => <li key={pizza.id}>{pizza.name}</li>) }
            </ul>
        </div>
    )
}

export default Menu
