import React from 'react';
import { FiDelete } from 'react-icons/fi';
import './DisplayAddedHeroes.css'

const DisplayAddedHeroes = (props) => {
    const {removeFromCart} = props;
    const { instructor, image, id } = props.courseInfo;
    return (
        <div>
            <h5 className="course-info"> 
                <span> 
                <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} className="rounded-circle" src={image} alt="" /> 
                </span> 
                {instructor}
                <FiDelete onClick={() => removeFromCart(id)} className='del-icon'/>
            </h5>
        </div>
    );
};

export default DisplayAddedHeroes;