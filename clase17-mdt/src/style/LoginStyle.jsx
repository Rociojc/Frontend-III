import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    body {
        background-image: linear-gradient(135deg, #667fea 0%, #764ba2 100%);
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Formulario = styled.form `
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // gap: 20px;
    width: 430px;
    padding: 30px 50px;
    background-color: #FFFFFF;
    border-radius: 20px;
    text-align: center;
`

export const Titulo = styled.h1 `
    margin-bottom: 30px;
`

export const Input = styled.input `
    padding: 10px;
    border-radius: 20px;
    border: none;
    width: 100%;
    margin-bottom: 20px;
    box-shadow: 0px 2px 29px -7px rgba(102, 127, 234, 0.75);
`

export const Boton = styled.button `
    width: 160px;
    padding: 8px;
    margin-bottom: 30px;
    border: none;
    border-radius: 20px;
    text-transform: uppercase;
    background-image: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    font-size: 12px;
    color: #ffffff;
`

export const Check = styled.input `
    margin-bottom: 30px;
`

export const Text1 = styled.span `
    font-size: 13px;
`
export const Text2 = styled.p `
    font-size: 13px;
`