import titulo from "./Saludo.module.css"

const Saludo = () => {
    const saludar = ["Hola", "Hola", "Hola", "Mundo"];

    return (
        saludar.map((saludo) =>
        <h1 className={titulo.azul}>{saludo}</h1>)
    )
}

export default Saludo;