import React from 'react';
import './Hero.css'
import { AiTwotoneStar } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

const Hero = (props) => {
    const {course_name, image, duration, price, instructor, rate} = props.learningHeroes;
    return (
        <div className='hero'>
            <img src={image} alt="" />
            <h4>{course_name}</h4>
            <p>Instructor: {instructor}</p>
            <p>Duration: {duration}</p>
            <p>Price: $ {price}</p>
            <p className='rating'>Rating: <AiTwotoneStar className='star' /> {rate}</p>
            <button onClick={()=> props.handleAddToCart(props.learningHeroes)} className='addToCart'><BsCartPlus className='cart-icon'/> Add To Cart</button>
        </div>
    );
};

export default Hero;