import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoTo from '../../components/GoTo';
import { Boton, Check, Formulario, GlobalStyle, Input, Text1, Text2, Titulo } from '../../style/LoginStyle';

function Login({ setIsLogged }) {
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
        <Titulo>Sign Up</Titulo>
      <Input placeholder='Name'/>
      <Input placeholder='E-mail'/>
      <Input placeholder='Password'/>
      <Check type='checkbox'/> <Text1>I read and agree to Terms & Conditions</Text1>
      <Boton>create account</Boton>
      <Text2>Already have an account?
        <GoTo argumentOne={"Sign In"} argumentTwo={"/sign_in"}/>
      </Text2>
    </Formulario>
    </>
  )
}

export default Login;