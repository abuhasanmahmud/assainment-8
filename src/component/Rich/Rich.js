import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './Rich.css'
const Rich = (props) => {
    // console.log(props);
    const {img ,name,position,role,balance}=props.richs;
    const element = <FontAwesomeIcon icon={faUser} />

    return (
        <div>

           <div className="single-richman-cart">

             <img src={img} />
            <h1>{name}</h1>
            <p>Role: {role}</p>
             <h3>Position:{position}</h3>
             <p>Curren Balance: {balance}</p>
             <button
              onClick={ () =>props.handalAddToCart(props.richs)}
             >{element}  Add to Cart</button>
           </div>

        </div>
    );
};

export default Rich;