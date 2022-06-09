import { Component } from "react";
import { Boton, BtnGoTo, CajaBotones, Contenedor, Nombre } from "./ClassAndFunComponentStyle";

class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            avatar: "https://blog.personal.com.py/wp-content/uploads/2020/09/los-3-mejores-episodios-de-Rick-y-Morty.jpg",
            name: "Rick and Morty",
            data: {},
            id: 1
        }
    }

    request = async() => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`);
        const result = await response.json();
        this.setState({data: result})
    }

    componentDidMount(){
        this.request();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.id !== this.state.id){
            this.request();
        }
    }

    incrementId = (arg) => {
        if(arg === "prev") {
            this.setState((prevState) => ({ id: prevState.id - 1 }));
        }else if (arg === "next") {
            this.setState((prevState) => ({ id: prevState.id + 1 }));
        }
    }

    render() {
        return (
            <Contenedor>
                <img
                    src={this.state.data.image}
                    alt={this.state.data.name}
                    style={{width:"250px", height:"200px"}}/>
                <Nombre>{this.state.data.name}</Nombre>
                <CajaBotones>
                    <Boton onClick={() => this.incrementId("prev")}>Prev</Boton>
                    <Boton onClick={() => this.incrementId("next")}>Next</Boton>
                </CajaBotones>
                <BtnGoTo onClick={() => this.props.setMostrarClass(2)} style={{backgroundColor:"#EC4391"}}>Go to FuncionalComponent</BtnGoTo>
            </Contenedor>
            
        )
    }
}

export default ClassComponent;