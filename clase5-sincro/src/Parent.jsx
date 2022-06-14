import ChildOne from "./Component/ChildOne";

//Aqui Parent es hijo del componente App
// Pero tambien Parent es padre del componente ChildOne

//Aqui estoy pasandole como atributo un nombre a la etiquera Child One
// Al hace esto aqui este atributo se vuelve disponible en el componente ChildOne el cual lo podemos pasar como props
// Estamo reutilizando un mismo hijo que childOne en tres componentes padre diferentes
const Parent = () => {
    return(
        <ChildOne nameOfChild="This is the component one"/>
    )
}

export default Parent;


// quede en el minuto 36 de la clase 5