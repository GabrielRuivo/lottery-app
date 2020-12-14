import React from 'react';
import {useAuth} from '../../context/AuthContext'

import {AiOutlineArrowRight} from 'react-icons/ai';
import {NavLink, useHistory} from 'react-router-dom';

import {useDispatch} from 'react-redux';
import {DivHeader} from './style';



const Header = (props) => {

   const dispatch = useDispatch();
   
   const { logout } = useAuth()

	const history = useHistory();

	async function handleLogout() {

      dispatch({type: 'CLEAR_STATE'})

		try {
			await logout()
			history.push('/login')
		} catch (error){
			console.log('Failed to log out')
		}
   }
   
   return(
      <DivHeader>
         <div className="div-title-header" >
            <h1>TGL</h1>
            <span className="border-bottom-title" /> 
         </div>

         <div className="div-link-home" >
            <NavLink className="NavLink-home-header" to="/history-bets" >{props.historyBets}</NavLink>
         </div>

         <div className="div-links-header" >
            <span className="NavLink-1-header" >{props.navLink1}</span>
            <span  onClick={handleLogout} className="NavLink-2-header" to="/login">{props.navLink2} <AiOutlineArrowRight/></span>
         </div>
      </DivHeader>
   );
}

export default Header;