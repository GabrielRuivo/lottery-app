import React, { useState, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
/* import { useAuth } from '../../context/AuthContext'; */
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { Container, AnimationLogo } from './style';
import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo.jsx';
import Form from '../../components/Form/Form';

import Spinner from '../../components/Spinner/Spinner';

import { apiAdonis } from '../../services/api';

const ChangePassword = () => {
   let { token } = useParams();
   const history = useHistory();
   const [ error, setError ] = useState()
   const [ message, setMessage ] = useState('')
   const [ loading, setLoading ] = useState(false)

   const passwordRef = useRef()
   /* const { resetPassword } = useAuth() */

   async function handleSubmit(e) {
      e.preventDefault()
      setLoading(true)
      try {
         setMessage('')
         setError('')

         /* await resetPassword(emailRef.current.value) */
         await apiAdonis.put('/forgot', {
            token: token,
            password: passwordRef.current.value
         })
         setLoading(false)
         passwordRef.current.value = '';
         toast.success('Senha trocado com sucesso !')

         setTimeout(() => {
            history.push('/login')
         }, 4000)

      } catch(err) {
         setLoading(false)
         toast.error('Algo deu errado !')
      }

   }

   let linkLog = (
      <button 
         type="submit"
         className="link-1" 
      >
         Change <AiOutlineArrowRight/>
      </button> 
   )

   return (
      <Container>

         <AnimationLogo>
            <Logo />
         </AnimationLogo>
         
         <Form 
            onSubmit={handleSubmit}
            title="Change password" 
            link1="Change" 
            link2="Log In" 
            linkLogin={linkLog}
            linkRedirect1="/"
            linkRedirect2="/login"
            icon1={<AiOutlineArrowRight/>}
            icon2={<AiOutlineArrowLeft/>}
         >
            {loading && <Spinner />}
            <Input type="password" refs={passwordRef} placeholder="Password"/>
            {error && <div className="span-message-error">{error}</div>}
            {message && <div className="span-message-send">{message}</div>}
         </Form>
      </Container>
   );
};

export default ChangePassword;