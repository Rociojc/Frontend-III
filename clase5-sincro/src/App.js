import { useState } from 'react'; // Este es el estado del componente, es una funcion nativa de react
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Parent from './Parent';
import AnotherComponent from './AnotherComponent';
import ThirdComponent from './ThirdComponent';

//Aqui App es el padre del componente Parent
function App() {
  // Aqui se define el nombre del estado, para este ejemplo usaremos el nombre de Kimba
  // Entonces kimba seria el objeto y setKimba seria la funcion que modifica el objeto
  const [ kimba, setKimba] = useState("La mascota de Adrian"); // El estado inicial es lo que pasamos dentro de useState

  // Ahora creamos una funcion que va a manejar el cambio de estado
  // Esta funcion recibe un paramentro, en este ejemplo seran numeros y una condicion
  
  const handlerKimba = (param) => {
    if(param === 1){
      setKimba(<Parent/>)
    }else if(param === 2){
      setKimba(<AnotherComponent/>)
    }else if(param === 3){
      setKimba(<ThirdComponent/>)
    }
  }

// Como los bonotes que realizan el cambio estan en el componente Navigation, esta funcion handlerKimba se pasara como props en Navigation y se le asigna un nombre, en este ejemplo sera kimbaFn
  return (
    <div className="App">
      <Navigation kimbaFn={handlerKimba}/> 
      {
        kimba
      }
    </div>
  );
}

export default App;
