import React from 'react'
import { Contenedor, Imagen, Titulo } from '../../Style/HomeStyle';

function Home({avatar}) {
  return (
    <Contenedor>
      <Titulo>Who is Johnny Depp?</Titulo>
      <Imagen src={avatar} alt="profile picture"/>
    </Contenedor>
  )
}

export default Home;