import { useState, useEffect } from "react";
import { Boton, BtnGoTo, CajaBotones, Contenedor, Nombre } from "./ClassAndFunComponentStyle";

const FuncionalComponent = ({setMostrarClass}) => {
    const [ data, setData ] = useState({});
    const [id, setId] = useState(1);

    useEffect(()=>{
        const request = async() => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const result = await response.json();
            setData(result)
        }
        request();
    }, [id]);

    const incrementId = (arg) => {
        if(arg === "prev") {
            setId((prevState) => prevState - 1);
        }else if (arg === "next") {
            setId((prevState) => prevState + 1);
        }
    }

    return (
        <Contenedor>
             <img
                src={data.image}
                alt={data.name}
                style={{width:"250px", height:"200px"}}/>
            <Nombre>{data.name}</Nombre>
            <CajaBotones>
                <Boton onClick={() => incrementId("prev")}>Prev</Boton>
                <Boton onClick={() => incrementId("next")}>Next</Boton>
            </CajaBotones>
            <BtnGoTo onClick={() => setMostrarClass(1)} style={{backgroundColor: "#7030A0"}}>Go To Class Component</BtnGoTo>
        </Contenedor>
    )
}

export default FuncionalComponent;