import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { Container, AnimationLogo } from './style';
import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo.jsx';
import Form from '../../components/Form/Form';

const ForgetPassword = () => {
   const history = useHistory();
   const [ error, setError ] = useState()
   const [ message, setMessage ] = useState('')

   const emailRef = useRef()
   const { resetPassword } = useAuth()

   async function handleSubmit(e) {
      e.preventDefault()

      try {
        setMessage('')
        setError('')

        await resetPassword(emailRef.current.value)
         toast.success('Email enviado com sucesso ! check seu inbox')
         setTimeout(() => {
            history.push('/login');
         }, 5000)
      } catch(err) {
         toast.error('Email não existe ! ')
      }

   }

   let linkLog = (
      <button 
         type="submit"
         className="link-1" 
      >
         Send Link<AiOutlineArrowRight/>
      </button> 
   )

   return (
      <Container>

         <AnimationLogo>
            <Logo />
         </AnimationLogo>
         
         <Form 
            onSubmit={handleSubmit}
            title="Reset password" 
            link1="Send link" 
            link2="Back" 
            linkLogin={linkLog}
            linkRedirect1="/"
            linkRedirect2="/login"
            icon1={<AiOutlineArrowRight/>}
            icon2={<AiOutlineArrowLeft/>}
         >
            
            <Input type="email" refs={emailRef} placeholder="Email"/>
            {error && <div className="span-message-error">{error}</div>}
            {message && <div className="span-message-send">{message}</div>}
         </Form>
      </Container>
   );
};

export default ForgetPassword;