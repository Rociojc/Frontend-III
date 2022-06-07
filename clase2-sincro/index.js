const products = [
    {id: 1, name: "Tshirt", isStock: false},
    {id: 2, name: "Pants", isStock: false},
    {id: 3, name: "Shorts", isStock: true},
    {id: 4, name: "Shoes", isStock: false},
    {id: 5, name: "Bracelets", isStock: true},
]

// Al array de objetos anterior vamos a mostrarlos como una lista
// A continuacion haremos la lista de forma manual

const liFirst = React.createElement(
    "li", 
    {key: 1}, // como vamos a tener varias etiquetas li dentro del mismo contenedor padre se necesita usar las key, de esa manera React sabra que cada elemento es diferente
    `${products[0].name}` // aqui renderizamos datos
);

const liSecond = React.createElement(
    "li", 
    {key: 2},
    `${products[1].name}`
)

const liThird = React.createElement(
    "li", 
    {key: 3},
    `${products[2].name}`
);

const ul = React.createElement(
    "ul",
    null, // aqui ya no necesitamos la key, este es el contenedor padre y no se repite, cuando no se usa la key se deja en null
    [liFirst, liSecond, liThird] // aqui renderizamos los hijos osea los li
);

// const hookedElement = document.getElementById("root");
// ReactDOM.render(ul, hookedElement) // aqui declaramos lo que queremos poner y donde lo queremos poner


// ------------------------------------------------------------- // -------------------------------------------------------------------------------

// Ahora haremos la misma lista pero de forma dinamica

// Creamos un componente donde declaramos la sintaxis del html
// Para usar javascript dentro de una etiqueta jsx debemos usar las llaves {}
// Dentro de las llaves {} llamamos la variable donde esta el contenido a renderizar
// para este ejemplo usaremos el metodo map, el cual recibe dos valores: el 1ro es cada elemento dentro del arreglo (el cual podemos llamarlo de la forma que queramos) y el segundo es el indice
// Para este ejemplo vamos a tomar cada elemento dentro del arreglo y lo retornaremos y asi recorremos y mostramos la lista de forma dinamica

// Para que el DOM VIRTUAL sepa cual de los elemento cambio debemos usar el key dentro de la etiqueta que muestra la lista
// El key debe ser una propiedad unica de cada elemento por lo tanto usamos su id

const App1 = (
    <div>
        <ul>
            {
                products.map((product) => {
                    return (
                        <li key={product.id}>{product.name}</li>
                    )
                })
            }
        </ul>
    </div>
)




// Hay una regla en react que indica que cada funcion debe retornar un solo componente
// Lo que quiere decir es que a la variable App no se le prodria colocar un div hermano
// Para poder hacer esto debemos usar <React.fragment>

// ----------------------------------------------------------------- // --------------------------------------------------------------------------

// Aqui vamos a ver el concepto de modularidad, cada funcion estria en un archivo difetente

// Tener en cuenta que por ahora estamos trabajando en solo archivo a modo de ejemplo

// Lo que haremos es mostrar una lista con los productos completos, otra lista con los productos disponibles y otra lista con los productos no disponibles

const displayProducts = (argument) => {
    if(argument === 1){
        return (
            <ul>
            <span>All Products</span>
            {
                products.map((product) => {
                    return (
                    <li key={product.id}>{product.name}</li>
                )
                })
            }
            </ul>
        )
    }else if (argument === 2) {
        return (
            <ul>
            <span>Products in stock</span>
            {
                products.map((product) => {
                    if(product.isStock){
                        return (
                            <li key={product.id}>{product.name}</li>
                        )
                    }
                })
            }
            </ul>
        )
    }else if (argument === 3) {
        return (
            <ul>
            <span>Products out stock</span>
            {
                products.map((product) => {
                    if(!product.isStock){
                        return (
                            <li key={product.id}>{product.name}</li>
                        )
                    }
                })
            }
            </ul>
        )
    }
}

// a diferencia del ejemplo anterior aqui en la variable donde renderizamos lo que hacemos es llamar la funcion que acabamos de crear

const App2 = (
    <div>
        <ul>
            {
                displayProducts(1)
            }
            {
                displayProducts(2)
            }
            {
                displayProducts(3)
            }
        </ul>
    </div>
)

const hookedElement = document.getElementById("root");
ReactDOM.render(App2, hookedElement)