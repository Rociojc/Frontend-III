import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GoTo from '../../components/GoTo';
import { Boton, Formulario, Input, Mensaje, Seccion, Text2, Titulo } from '../../style/LoginStyle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import * as Yup from "yup";

function SignIn({ setIsLogged }) {
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Ingresa un e-mail valido").required("Campo Requerido"),
      password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Campo Requerido")
      .matches(
        /^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{6,}$/,
        "La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial"
      )
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      setIsLogged(true);
      navigate("/home");
    }
  })

  return (
    <>
    <Formulario onSubmit={formik.handleSubmit}>
      <Titulo>Sign In</Titulo>
      {formik.errors.email && <Mensaje>{formik.errors.email}</Mensaje>}
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
      {formik.errors.password && <Mensaje>{formik.errors.password}</Mensaje>}
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
      <Boton>Log In</Boton>
      <Text2>Not a member?
        <GoTo argumentOne={" Create Account"} argumentTwo={"/login/sign_up"}/>
      </Text2>
    </Formulario>
    </>
  )
}

export default SignIn