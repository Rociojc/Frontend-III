import styled from "styled-components";

export const Contenedor = styled.div `
    background-color: #240e8b;
    width: 800px;
    height: 600px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 20px;
    `

export const Nombre = styled.p `
    width: 500px;   
    font-size: 50px;
    font-weight: 700;
    color: white;
    text-align: center;
    margin: 0;
    `

export const CajaBotones = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

export const Boton = styled.button`
    background-color: #f9c449;    
    padding: 15px;
    width: 200px;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    font-weight: 700;
`

export const BtnGoTo = styled.button`   
    padding: 20px;
    width: 400px;
    border-radius: 50px;
    border: none;
    font-size: 20px;
    font-weight: 700;
    color: white;
`