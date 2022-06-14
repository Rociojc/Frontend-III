
// Aqui ChildOne es hijo del componente Parent
// Si quisiera que este componente fuera reutilizado la logica debe de realizarse en el componente padre

// Entonces dentro de los parentecis puedo pasar el atributo que cree a la etiqueta en en componente Parent
// Puedo pasarlo como props o desestructurarlo, no olvidar que al invocar la props esto debe hacerse dentro de las llaves {}
const ChildOne = (props) => {
    return(
        <div>Child {props.nameOfChild}</div>
    )
}

export default ChildOne;