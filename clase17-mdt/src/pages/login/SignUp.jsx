import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoTo from '../../components/GoTo';
import { Boton, Check, Formulario, Input, Seccion, Text1, Text2, Titulo } from '../../style/LoginStyle';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';


function SignUp({ setIsLogged }) {

    const navigate = useNavigate();
    const handlerSubmit = (e) => {
    e.preventDefault();
    setIsLogged(true);
    navigate("/home");
  }

  return (
    <>
    <Formulario onSubmit={handlerSubmit}>
      <Titulo>Sign Up</Titulo>
      <Seccion>
        <PersonIcon/>
        <Input placeholder='Name'/>
      </Seccion>
      <Seccion>
        <EmailIcon/>
        <Input placeholder='E-mail'/>
      </Seccion>
      <Seccion>
        <LockIcon/>
        <Input placeholder='Password'/>
      </Seccion>
      <Check type='checkbox'/> <Text1>I read and agree to Terms & Conditions</Text1>
      <Boton>create account</Boton>
      <Text2>Already have an account?
        <GoTo argumentOne={" Sign In"} argumentTwo={"/login/sign_in"}/>
      </Text2>
    </Formulario>
    </>
  )
}

export default SignUp;