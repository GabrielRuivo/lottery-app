import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
/* import { useHistory } from 'react-router-dom'; */
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { Container, AnimationLogo } from './style';

import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo.jsx';
import Form from '../../components/Form/Form';

import Spinner from '../../components/Spinner/Spinner';

export default function Register() {
  /*  const [ error, setError ] = useState(false);
   const [ errPwd, setErrPwd ] = useState();
   const [ emptyErr, setEmptyErr ] = useState(false);
   const [ success, setSucces ] = useState(false) */
   const [ loading, setLoading ] = useState(false)
   
   const nameRef = useRef()
   const emailRef = useRef()
   const passwordRef = useRef()
   const { onSignUpSubmit } = useAuth()

   /* const history = useHistory(); */

   function inputFocus() {
      nameRef.current.focus();
   }

   async function handleSubmit(e) {
      e.preventDefault()

      try {
         if(nameRef.current.value === '' || emailRef.current.value === '' || passwordRef.current.value === '') {
            return toast.error('Preencha todos os campos corretamente !')
         } 

         if(passwordRef.current.value.length < 6) {
            return toast.error('A senha deve ter no minímo 6 digítos !')
         }
      
         setLoading(true)
         await onSignUpSubmit(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
         toast.success('Registrado com sucesso !')

/*          setTimeout(() => {
            history.push("/login")
         }, 4000); */
         
      } catch(e) {
         console.log('Err', e)
         toast.info('Este email já está em uso tente outro.')
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
         <AnimationLogo>
            <Logo />
         </AnimationLogo>
          
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
            <Input onClick={inputFocus} type="text" refs={nameRef} placeholder="Your name" required />
            <Input className="input-no-radius" type="email" refs={emailRef} placeholder="Email" required />
            <Input className="input-no-radius" type="password" refs={passwordRef} placeholder="Password" required />

            {/* {emptyErr && <div className="span-message-error" >Correctly fill in the fields !</div>}
            {success && <div className="span-message-send" >successful registration!!!</div>}
            {errPwd && <div className="span-message-error" >The password field must be at least 6 characters !</div>}
            {error && <div className="span-message-error" >The email address is already in use by another account.</div> } */}
         </Form>
      </Container>
   );
}


