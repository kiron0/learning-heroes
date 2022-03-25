import React from 'react';
import './Cart.css'
import DisplayAddedHeroes from '../DisplayAddedHeroes/DisplayAddedHeroes';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    let grandTotal = 0;
    for(const price of cart){
        grandTotal = grandTotal + price.price;
    };
    return (
        <div className='cart reverse-main'>
            <h2>Total Budget: $ 10000</h2>
            <h3>Order Summary</h3>
            <p>Total Selected Course: <span className='cart-length'>{cart.length}</span></p>
            <p>Total Price: <span className='grand-total'>$ {grandTotal}</span></p>
            {
                    cart.map(courseInfo => <DisplayAddedHeroes
                        key={courseInfo.id}
                        courseInfo={courseInfo} removeFromCart={removeFromCart}
                    ></DisplayAddedHeroes>)
                }
        </div>
    );
};

export default Cart;