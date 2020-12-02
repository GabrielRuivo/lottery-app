import React from 'react';

import {Container} from './Style';

const Input = (props) => {
  return(
    <Container>
      <input 
            className={
               props.invalid && props.shouldValidate && props.touched
               ? "valid" 
               : "inputElement"
            }   
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}
            type={props.type}
            placeholder={props.placeholder}
            ref={props.refs}
         />
    </Container>
  );
}

export default Input;