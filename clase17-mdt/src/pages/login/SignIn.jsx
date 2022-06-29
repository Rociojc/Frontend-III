import React from 'react'
import { useNavigate } from 'react-router-dom'
import GoTo from '../../components/GoTo';
import { Boton, Formulario, Input, Seccion, Text2, Titulo } from '../../style/LoginStyle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

function SignIn({ setIsLogged }) {
    const navigate = useNavigate();
    const handlerSubmit = (e) => {
    e.preventDefault();
    setIsLogged(true);
    navigate("/home");
  }
  return (
    <>
    <Formulario onSubmit={handlerSubmit}>
      <Titulo>Sign In</Titulo>
      <Seccion>
        <EmailIcon/>
        <Input placeholder='E-mail' />
      </Seccion>
      <Seccion>
        <LockIcon/>
        <Input placeholder='Password' />
      </Seccion>
      <Boton>Log In</Boton>
      <Text2>Not a member?
        <GoTo argumentOne={" Create Account"} argumentTwo={"/login/sign_up"}/>
      </Text2>
    </Formulario>
    </>
  )
}

export default SignIn