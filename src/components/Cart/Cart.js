import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {

    // destructring
    const { cart } = props;

    // calculation total
    let total = 0;

    for (const developer of cart) {
        total += developer.salary;
    }




    return (
        <div className="cart">

            <h4> <FontAwesomeIcon icon={faUser} /> Developer Added: {props.cart.length}</h4>
            <div className="name">
                <h4>Developer Name:</h4>
                {
                    cart.map(cart => <Name name={cart.name}
                        key={cart.key}

                    ></Name>)
                }
            </div>

            <h4>Total Salary Cost: $ {total}</h4>
            <div className="btn">
                <button>Hire Now</button>
            </div>


        </div>
    );
};
// Name componet
const Name = (props) => {

    return (
        <div>
            <p>{props.name}</p>
        </div>
    )
}

export default Cart;