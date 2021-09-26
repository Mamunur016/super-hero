import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Developers.css'

const Developers = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./developers.JSON')
            .then(res => res.json())
            .then(data => {
                setDevelopers(data);

            });
    }, []);
    const handleAddToCart = (developer) => {
        // console.log(developer.name);
        const newCart = [...cart, developer];
        setCart(newCart);

    }
    return (
        <div className="developers-container">
            <div className="developer-container">
                {
                    developers.map(developer => <Developer
                        key={developer.key}
                        developer={developer}
                        handleAddToCart={handleAddToCart}
                    ></Developer>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Developers;