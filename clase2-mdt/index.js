const verduras = [
    {id: 1, nombre: "Tomate", isStrock: true},
    {id: 1, nombre: "Cebolla", isStrock: true},
    {id: 1, nombre: "Pepino", isStrock: false},
    {id: 1, nombre: "Brocoli", isStrock: true},
    {id: 1, nombre: "Ajo", isStrock: true},
    {id: 1, nombre: "Apio", isStrock: false},
    {id: 1, nombre: "Berenjena", isStrock: true},
    {id: 1, nombre: "Lechuga", isStrock: false},
    {id: 1, nombre: "Espiaca", isStrock: true},
    {id: 1, nombre: "Platano", isStrock: false},
]

const listaVerduras = (argumento) => {
    if(argumento === 1) {
        return(
            <ul>
                <spam>Verduras en Stock</spam>
                {
                    verduras.map((verdura) => {
                        if(verdura.isStrock) {
                            return(
                                <li key={verdura.id}>{verdura.nombre}</li>
                            )
                        }
                        
                    })
                }
            </ul>
        )
    }else if(argumento === 2) {
        return(
            <ul>
                <spam>Verduras fuera de Stock</spam>
                {
                    verduras.map((verdura) => {
                        if(!verdura.isStrock) {
                            return(
                                <li key={verdura.id}>{verdura.nombre}</li>
                            )
                        }
                    })
                }
            </ul>
        )
    }
}

const App = (
    <div>
        {
            listaVerduras(1)
        }
        {
            listaVerduras(2)
        }
    </div>
)

const hookedElement = document.getElementById("root");
ReactDOM.render(App, hookedElement);