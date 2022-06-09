import { useState } from 'react';
import './App.css';
import ClassComponent from './Componentes/ClassComponent';
import FuncionalComponent from './Componentes/FuncionalComponent';
import Botones from './Componentes/Botones';

function App() {

  const [ mostrarClass, setMostrarClass ] = useState(0);

  return (
    <div>
      {mostrarClass === 0?
      <Botones
        setMostrarClass={setMostrarClass}    
      /> : null
      }
      {mostrarClass === 0 ? null : mostrarClass === 1 ? <ClassComponent setMostrarClass={setMostrarClass}/> : <FuncionalComponent setMostrarClass={setMostrarClass}/>}
    </div>
  );
}

export default App;
