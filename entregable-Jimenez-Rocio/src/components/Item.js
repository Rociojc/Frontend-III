import { useState } from "react"
import { Boton, Cant, Contenedor, Descrip, Imagen, Producto } from "../Style/ItemStyle"

// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item({ nombre, imagen, descripcion, stock, agregar }) {
  const [cantidad, setCantidad] = useState(stock)

  const disminuirStock = () => {
    setCantidad(cantidad - 1)
    agregar()
  }

  return (
    <Contenedor>
      {
        <Producto>
          <h3>{nombre}</h3>
          <Imagen src={imagen} alt={nombre}/>
          <Descrip>{descripcion}</Descrip>
          <h5>En stock: <Cant>{cantidad === 0 ? "agotado" : cantidad}</Cant></h5>
          <Boton disabled={cantidad === 0} onClick={disminuirStock}>{cantidad === 0 ? "sin stock" : "comprar"}</Boton>
        </Producto>
      }
    </Contenedor>
  )
}
