import styled from "styled-components";

export const Contenedor = styled.div `
    padding: 20px;
    border-radius: 20px;
    background-color: #EFD2C9
`

export const Producto = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    height: 100%;
    text-align: center
`
export const Imagen = styled.img `
    width: 200px;
    margin: 0 auto;
`

export const Descrip = styled.p `
    text-align: justify;
`

export const Cant = styled.span `
    background-color: #CFF2C9;
    padding: 2px 5px;
    border-radius: 3px;
`

export const Boton = styled.button `
    width: 100px;
    margin: 0 auto;
    padding: 5px;
    text-transform: uppercase;
    border: none;
    border-radius: 3px;
    background-image: #F5F5F5;
    box-shadow: -6px 5px 10px 0px rgb(74,74,74);
`