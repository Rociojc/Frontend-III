import { Boton, Contenedor } from "./BotonesStyle";


function Botones ({setMostrarClass}) {

    return(
        <Contenedor>
            <Boton onClick={()=>setMostrarClass(1)} style={{backgroundColor:"#7030A0"}}>Class Component</Boton>
            <Boton onClick={()=>setMostrarClass(2)} style={{backgroundColor:"#EC4391"}}>Funcional Component</Boton>
        </Contenedor>
    )

}

export default Botones;