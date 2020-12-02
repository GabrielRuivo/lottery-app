import React, { useRef, useState } from 'react';

import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { Container } from './style';

import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo.jsx';
import Form from '../../components/Form/Form';

import Spinner from '../../components/Spinner/Spinner';

export default function Register() {
   const [ error, setError ] = useState()
   const [ loading, setLoading ] = useState(false)
   
   const nameRef = useRef()
   const emailRef = useRef()
   const passwordRef = useRef()
   const { onSignUpSubmit } = useAuth()

   const history = useHistory();

   async function handleSubmit(e) {
      e.preventDefault()
      try {
         setError('')
         setLoading(true)
         await onSignUpSubmit(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
         alert('CADASTRO REALIZADO COM SUCESSO !')

         setTimeout(() => {
            history.push("/login")
         }, 1000);
         
      } catch (err) {
         setError('Failed to create an account')
      }
      setLoading(false)
   }

   let linkSig = (
      <button 
         type="submit"
         className="link-1" 
         disabled={loading}
      >
         SignIn <AiOutlineArrowRight/>
      </button> 
   )

   return (
      <Container>
         <Logo />
            
         <Form 
            onSubmit={handleSubmit}
            title="Registration" 
            link1="Register" 
            link2="Back" 
            linkLogin={linkSig}
            linkRedirect1="/login"
            linkRedirect2="/login"
            icon1={<AiOutlineArrowRight/>}
            icon2={<AiOutlineArrowLeft/>}
         >
            {loading ? <Spinner /> : ''}
            <Input type="text" refs={nameRef} placeholder="Your name" required />
            <Input type="email" refs={emailRef} placeholder="Email" required />
            <Input type="password" refs={passwordRef} placeholder="Password" required />

            {error && <span>{error}</span>}
         </Form>
      </Container>
   );
}