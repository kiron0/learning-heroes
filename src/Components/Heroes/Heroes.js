import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Hero from '../Hero/Hero';
import './Heroes.css'

const Heroes = () => {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kiron0/fakeData/main/fakeData.json')
        .then(res => res.json())
        .then(data => setHeroes(data.slice(0, 14)));
    }, []);

    /* Cart functionality */
    const [cart, setCart] = useState([]);
    const handleAddToCart = (course) => {
        const newCourse = [...cart, course];
        setCart(newCourse);
    }
    return (
        <div className='course-container'>
            <div className='heroes-container'>
            {
                heroes.map(hero => <Hero key={hero.id} learningHeroes={hero} handleAddToCart={handleAddToCart}></Hero>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Heroes;