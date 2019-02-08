import React from 'react';
import RandColor from '../hoc/randomColor';

const Contact = ()=>{
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eius iure distinctio minus, esse quis! Recusandae debitis, sed molestias a ex porro deserunt facere quos, necessitatibus impedit dignissimos vel. Explicabo.</p>
        </div> 
    )
}

export default RandColor(Contact);