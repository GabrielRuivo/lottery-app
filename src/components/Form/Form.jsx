import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Title} from './Style'

const Logo = props => {
   return (
      <Container>

         <Title>{props.title}</Title>
         <form onSubmit={props.onSubmit}>
            {props.children}

            {props.title === 'Authentication'
               ? <div className="div-link-forget">
                     <NavLink className="link-forget" to="/forgetPassword" >
                        I forget my password
                     </NavLink>
                  </div>
               : ''
            }
            
            <div className="div-link-login">
               {props.linkLogin}
            </div>
         </form>
         
         {
            props.icon2.type.name === 'AiOutlineArrowLeft'
            ? <NavLink className="link-2" to={props.linkRedirect2} > {props.icon2} {props.link2} </NavLink>
            : <NavLink className="link-2" to={props.linkRedirect2} > {props.link2} {props.icon1} </NavLink>
         }
         
      </Container>
   );
};

export default Logo;