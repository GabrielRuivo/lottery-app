import React, {useState, useRef} from 'react';
import {toast} from 'react-toastify';
/* import { useHistory } from 'react-router-dom'; */
import { useAuth } from '../../context/AuthContext';

import {AiOutlineArrowRight} from 'react-icons/ai';

import {Container, AnimationLogo} from './style';
import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo.jsx';
import Form from '../../components/Form/Form';

import Spinner from '../../components/Spinner/Spinner';

const Login = () => {

   const [ error, setError ] = useState()
   const [ loading, setLoading ] = useState(false)

   /* const history = useHistory(); */

   const emailRef = useRef()
   const passwordRef = useRef()
   const { login } = useAuth()

   async function handleSubmit(e) {
      e.preventDefault()

      try {
         setError('')
         setLoading(true)
         await login(emailRef.current.value, passwordRef.current.value)
        /*  history.push("/history-bets") */
      } catch(err) {
         toast.error('Email or password invalid')
      }
      setLoading(false)

   }

      let linkLog = (
         <button 
            disabled={loading}
            type="submit"
            className="link-1" 
         >
            Log In<AiOutlineArrowRight/>
         </button> 
      )

      return (
         <Container>
            <AnimationLogo>
               <Logo />
            </AnimationLogo>
            
            <Form 
               onSubmit={handleSubmit}
               title="Authentication" 
               link1="Log In" 
               link2="Sign Up" 
               linkLogin={linkLog}
               linkRedirect1="/historyBets"
               linkRedirect2="/register"
               icon1={<AiOutlineArrowRight/>}
               icon2={<AiOutlineArrowRight/>}
            >
               {loading ? <Spinner /> : ''}
                  <Input type="email" refs={emailRef} placeholder="Email" required />
                  <Input className="input-no-radius" type="password" refs={passwordRef} placeholder="Password" required />
               {error && <div className="span-message-error" >{error}</div>}
               
            </Form>
         </Container>
      );
   }


export default Login;
