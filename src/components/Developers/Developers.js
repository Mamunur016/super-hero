import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Developers.css'

const Developers = () => {

    // different useState hook
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);
    const [displaycart, setDisplayCart] = useState([]);

    // fetch data from api
    useEffect(() => {
        fetch('./developers.JSON')
            .then(res => res.json())
            .then(data => {
                setDevelopers(data);

            });
    }, []);


    //  set unique value of array of object
    useEffect(() => {

        const key = 'key';

        const arrayUniqueByKey = [...new Map(cart.map(item => [item[key], item])).values()];
        setDisplayCart(arrayUniqueByKey);
    }, [cart])


    // event handler
    const handleAddToCart = (developer) => {
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
                <Cart cart={displaycart}></Cart>

            </div>
        </div>
    );
};

export default Developers;