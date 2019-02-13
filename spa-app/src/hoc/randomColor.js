import React from 'react';

const RandColor = (WrappedComponent)=>{

    const colors = [ 'red', 'blue', 'yellow', 'magenta', 'green', 'purple', 'orange'];
    const pickColor = colors[Math.floor(Math.random() * 6)];
    /* #1 when applying the color attribute using Materialize the suffix (-text) must be 
     added to color the text. pickColor provides the color name then concat -text */
    const multi = pickColor + '-text'; // #1

    return(props)=>{
        return(
            <div className= { multi }>
                <WrappedComponent {...props } />
            </div>
        )
    }
}

export default RandColor;