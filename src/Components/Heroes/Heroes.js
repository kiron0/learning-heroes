import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Hero from '../Hero/Hero';
import './Heroes.css'

const Heroes = () => {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kiron0/fakeData/main/fakeData.json')
        .then(res => res.json())
        .then(data => setHeroes(data));
    }, []);

    /* Cart functionality */
    const [cart, setCart] = useState([]);
    const handleAddToCart = (course) => {
        const newCourse = [...cart, course];
        setCart(newCourse);
    }
    const removeFromCart = (id) => {
        const newList = cart.filter((item) => item.id !== id);
        setCart(newList);
    };
    return (
        <div className='course-container'>
            <div className='heroes-container reverse-main'>
            {
                heroes.map(hero => <Hero key={hero.id} learningHeroes={hero} handleAddToCart={handleAddToCart}></Hero>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
            </div>
        </div>
    );
};

export default Heroes;