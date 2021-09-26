import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    console.log(cart);
    let total = 0;
    let names = [];
    for (const developer of cart) {
        total += developer.salary;
        names = [...names, developer.name];

    }



    console.log(names);
    return (
        <div>
            <h2>cart summary</h2>
            <h4>Developer Added: {props.cart.length}</h4>
            <h4>Developer Name:{names}</h4>

            <h4>Total Salary Cost: {total}</h4>


        </div>
    );
};

export default Cart;