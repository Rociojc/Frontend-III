import React from "react";
import { Contenedor, Div, ButtonSuma, ButtonResta } from "./ContadorStyle.js"

class Contador extends React.Component {

    state = {
        count: 0
    }

    sumar = () => {
        this.setState({count: this.state.count + 1})
    }

    resta = () => {
        if(this.state.count > 0 ) {
            this.setState({count: this.state.count - 1})
        }
        
    }

    render() {
        return(
            <Contenedor>
                <Div>
                    {this.state.count}
                    <ButtonSuma onClick={()=>this.sumar()}>+</ButtonSuma>
                    <ButtonResta onClick={()=>this.resta()}>-</ButtonResta>
                </Div>
            </Contenedor>
        )
    }
}

export default Contador;