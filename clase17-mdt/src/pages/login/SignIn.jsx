import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Boton, Formulario, GlobalStyle, Input, Titulo } from '../../style/LoginStyle';

function SignIn({ setIsLogged }) {
    const navigate = useNavigate();
    const handlerSubmit = (e) => {
    e.preventDefault();
    setIsLogged(true);
    navigate("/home");
  }
  return (
    <>
    <GlobalStyle/>
    <Formulario onSubmit={handlerSubmit}>
      <Titulo>Sign In</Titulo>
      <Input placeholder='E-mail' />
      <Input placeholder='Password' />
      <Boton>Log In</Boton>
    </Formulario>
    </>
  )
}

export default SignIn