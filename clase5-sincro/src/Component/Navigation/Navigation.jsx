
// Aqui estamos pasando como props la funcion handlerKimba que le asignamos el nombre kimbaFn
const Navigation = ( {kimbaFn} ) => {
    return(
        <nav>
            <button onClick={()=> kimbaFn(1)}>Parent Component</button>
            <button onClick={()=> kimbaFn(2)}>Another Component</button>
            <button onClick={()=> kimbaFn(3)}>Third Component</button>
        </nav>
    )
}

export default Navigation;