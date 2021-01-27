import React, {useState, useRef, useContext} from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { apiAdonis } from '../../services/api';

import { AiOutlineArrowRight } from 'react-icons/ai';

import {Container, AnimationLogo} from './style';
import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo.jsx';
import Form from '../../components/Form/Form';

import Spinner from '../../components/Spinner/Spinner';

const Login = () => {

   const [ error, setError ] = useState(false)
   const [ errorPwd, setErrorPwd ] = useState(false)
   const [ errorEmail, setErrorEmail ] = useState(false)
   const [ loading, setLoading ] = useState(false)

   const [ token, setToken ] = useContext(AuthContext)

   const history = useHistory();

   const emailRef = useRef()
   const passwordRef = useRef()
   /* const { login } = useAuth() */

   async function handleSubmit(e) {
      e.preventDefault()
      
      try {
         setLoading(true)

         /* await login(emailRef.current.value, passwordRef.current.value) */
         await apiAdonis.post('/login', {
            email: emailRef.current.value,
            password: passwordRef.current.value
         }).then(res => {
            const response = res.data;
            localStorage.setItem('@tokenLottery', JSON.stringify(response))

         })
         setToken(true)

      } catch(err) {
         
         if(passwordRef.current.value.length < 6) {
            setErrorPwd(true)
            setErrorEmail(false)
            setError(false)
         }
         if(passwordRef.current.value.length >= 6) {
            setErrorPwd(false)
         }
         if(emailRef.current.value.length === 0) {
            setErrorPwd(false)
            setErrorEmail(true)
            setError(false)
         }
         if(emailRef.current.value.length === 0 && passwordRef.current.value.length === 0 ) {
            setErrorPwd(false)
            setErrorEmail(false)
            setError(true)
         }

         if(passwordRef.current.value.length >= 6 && emailRef.current.value.length > 0) {
            toast.error('E-mail ou senha inválido.')
         }
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
               {errorPwd && <div className="span-message-error" >Senha no mínimo 6 dígitos</div>}
               {errorEmail && <div className="span-message-error" >E-mail é obrigatório</div>}
               {error && <div className="span-message-error" >E-mail e senha obrigatório</div>}
            </Form>
         </Container>
      );
   }


export default Login;
