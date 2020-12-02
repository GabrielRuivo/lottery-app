import React from 'react';
import './style.css';

const Buttons = (props) => {
    return(
        <button 
            className="button-1" 
            onClick={props.clicked} 
            style={{background: props.background}} >

            {props.children}
            
        </button>
    );
}

export default Buttons;

