import './App.css';
import { Component } from "react";
  


class App extends Component {

  constructor() {
    super();
    this.state = {data:{}, id:1}
  }

  request = async() => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`);
    const result = await response.json();
    this.setState({data:result});
  }

  componentDidMount() {
    this.request();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.id != this.state.id){
      this.request();
    }
  }

  incrementar(argument) {
    if(argument === "Anterior"){
      this.setState(prevState => ({id: prevState.id - 1}))
    }else if(argument === "Siguiente"){
      this.setState(prevState => ({id: prevState.id + 1}))
    }
  }

  render() {
    console.log(this.state.id)
    return (
      <div className="App">
        <h1>Hola</h1>
        <img src={this.state.data.image} alt="imagen"/>
        <p>{this.state.data.name}</p>
        <button onClick={() => this.incrementar("Anterior")}>Anterior</button>
        <button onClick={() => this.incrementar("Siguiente")}>Siguiente</button>
      </div>
    );
  }
  
}

export default App;
