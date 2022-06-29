import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Boton, Contenedor, GlobalStyle, Titulo } from '../../style/LoginStyle';

function Login() {

  const [ocultar, setOcultar] = useState(false);

  const handleClick = () => {
    setOcultar(true);
  }

    const navigate = useNavigate();

  return (
    <>
    <GlobalStyle/>
    {
      ocultar === false ?
      <Contenedor>
      <Titulo>Bienvenido</Titulo>
      <Boton onClick={() => handleClick(navigate("/login/sign_up")) }>Login</Boton>
    </Contenedor> : null
    }
    <Outlet/>
    </>
  )
}

export default Login;