import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoTo from '../../components/GoTo';
import { Boton, Check, Formulario, Input, Seccion, Text1, Text2, Titulo } from '../../style/LoginStyle';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';



function SignUp({ setIsLogged }) {
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      setIsLogged(true);
      navigate("/home");
    }
  })

  return (
    <>
    <Formulario onSubmit={formik.handleSubmit}>
      <Titulo>Sign Up</Titulo>
      <Seccion>
        <PersonIcon/>
        <Input
          type="text"
          placeholder='Name'
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </Seccion>
      <Seccion>
        <EmailIcon/>
        <Input
          type="email"
          placeholder='E-mail'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </Seccion>
      <Seccion>
        <LockIcon/>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder='Password'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {
          showPassword === false ?
          <VisibilityOffIcon onClick={() => {setShowPassword(!showPassword)} }/> : 
          <VisibilityIcon onClick={() => {setShowPassword(!showPassword)} }/>
        }
        
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