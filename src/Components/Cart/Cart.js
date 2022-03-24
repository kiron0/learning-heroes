import React from 'react';
import './Cart.css'
import DisplayAddedHeroes from '../DisplayAddedHeroes/DisplayAddedHeroes';

const Cart = (props) => {
    const {cart} = props;
    let grandTotal = 0;
    for(const price of cart){
        grandTotal = grandTotal + price.price;
    };
    return (
        <div className='cart reverse-main'>
            <h2>Total Budget: $ 10000</h2>
            <h3>Order Summary</h3>
            <p>Total Selected Course: {cart.length}</p>
            <p>Total Price: $ {grandTotal}</p>
            {
                    cart.map(courseInfo => <DisplayAddedHeroes
                        key={courseInfo.id}
                        courseInfo={courseInfo}
                    ></DisplayAddedHeroes>)
                }
        </div>
    );
};

export default Cart;