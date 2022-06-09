// Vamos a crear un proyecto que muestre la informacion de un actor
// Este contara con un nav con varias opciones
// debajo del nav una imagen
// Y debajo de la imagen informacion personal del actor e informacion de las peliculas

// -------------------------------------------------------------------- // ----------------------------------------------------------------

// Iniciaremos agregando la informacion de forma hardcodeada

// Comenzamos creando la etiqueta header donde estara el nav
// Las funciones o componentes los colocamos en la variable App1 que es donde lo vamos a renderizar, ejemplo el componente Header el la App1 se coloca asi <Header/>
const Header1 = () => {
    return (
        <header style={{width: "100%", height: "20vh"}}>
            <nav style={{width: "100%"}}>
                <ul style={{display: "flex", justifyContent: "space-evenly", listStyle: "none"}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Movies</li>
                </ul>
            </nav>
        </header>
    )
}

// Ahora creamos la funcion Info para agregar la informacion del actor

const Info1 = () => {
    return (
        <main>
            <section>
                <h1>Name: Jhonny Deep</h1>
                <p>Nationality: American</p>
                <p>Age: 44 years old</p>
                <p>Occupation: Actor</p>
            </section>
            <section style={{width: "300px"}}>
                <img style={{width: "200px", height: "160px"}} src="https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg" alt="profile-pinture"/>
            </section>
        </main>
    )
}

const App1 = (
    <div>
        <Header1/>
        <Info1/>
    </div>
);

// Toda la informacion anterior no puede ser hardcodeada, o nos tocaria por cada actor que queramos ver escribir su informacion
// Por lo anterior necesitamos reutilizar el componente ya creado

// --------------------------------------------------------------------------------------------- // -------------------------------------------------------------------------------------------------------

// Aqui haremos nuestro proyecto un poquito mas dinamico
// Por lo tanto vamos a reutilizar los componentes que creamos

const Header2 = () => {
    return (
        <header style={{width: "100%", height: "20vh"}}>
            <nav style={{width: "100%"}}>
                <ul style={{display: "flex", justifyContent: "space-evenly", listStyle: "none"}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Movies</li>
                </ul>
            </nav>
        </header>
    )
}

// Como Info es un funcion puede recibir argumentos, para este ejemplo llamaremos al argumento props
// Props es un objeto que nos pone a disposicion react para hacerle llegar informacion de manera dinamica al componente
// Quitamos los datos que hardcodeamos
// Props ahora tiene propiedades, son las que colocamos en la App2 en Info2 (name, nationality, ect)
// Ahora usamos las llaves y usamos el argumento osea el props junto con la propiedad que necesitemos
const Info2 = (props) => {
    return (
        <main>
            <section>
                <h1>Name:{props.name}</h1>
                <p>Nationality:{props.nationality}</p>
                <p>Age:{props.age} years ols</p>
                <p>Occupation:{props.occupation}</p>
            </section>
            <section style={{width: "300px"}}>
                <img style={{width: "200px", height: "160px"}} src="https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg" alt="profile-pinture"/>
            </section>
        </main>
    )
}

// Aunque la funcion Info ya la podemos reutilizar, en App2 estamos pasando los datos hardcodeados
const App2 = (
    <div>
        <Header2/>
        <Info2
            name="Jhonny Deep"
            nationality="American"
            age={44}
            occupation="Actor / Producer"
        />
    </div>
);

// ------------------------------------------------------------------------------------- // -------------------------------------------------------------------------------------------

// Aqui haremos nuestro proyecto aun mas dinamico

// Para esto vamos a necesitar una lista de objetos
const state = {
    personalData: {
        name: "Johnny",
        lastname: "Depp",
        age: 44,
        nationality: "American",
        residence: "France",
        occupation: "Actor / Producer",
        avatar: "https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg"
    },
    experience: [
        { id: 1, movie: "Pirates of the Caribbean"},
        { id: 2, movie: "Edward Scissors hand"},
        { id: 3, movie: "Johnny Brasco"}
    ],
    education: [
        { id: 1, institute: "University of Arts."},
        { id: 2, institute: "University UCLA"},
        { id: 3, institute: "University of Paris"}
    ],
    bio: "I am a person like everyone else, trying to have a normal life whilst doing the things that make me happy"
}

const Header3 = () => {
    return (
        <header style={{width: "100%", height: "20vh"}}>
            <nav style={{width: "100%"}}>
                <ul style={{display: "flex", justifyContent: "space-evenly", listStyle: "none"}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Movies</li>
                </ul>
            </nav>
        </header>
    )
}

// Aqui podemos hacer uso de la desestructuracion, cogemos props que era como lo teniamos en el ejemplo anterior y lo desestructuramos, como props es de tipo objeto no olvidemos usar las llaves {}
// Por lo tanto ya no es necesario usar props.algo, porque ya esta desestructurado, solo usamos la propiedad, no olvidemos usar las llaves {}
const Info3 =({name, nationality, age, occupation, avatar}) => {
    return (
        <main>
            <seccion>
                <h1>Name: {name}</h1>
                <p>Nationality: {nationality}</p>
                <p>Age: {age} years old</p>
                <p>Occupation: {occupation}</p>
            </seccion>
            <seccion style={{width: "300px"}}>
                <img style={{width: "200px", height: "160px"}} src={avatar} alt="profile"/>
            </seccion>
        </main>
    )
    
}


// Ahora creamos el componente Education para mostrar la informacion de la educacion de nuestro actor
// Como quiero que de una vez sea dinamico le paso el argumento props
// Analizando el objeto State, donde esta la info, vemos que Education tiene 3 objetos y tomamos las propiedades que necesitemos
// 
const Education1 = (props) => {
    return(
        <li>{props.institute}</li>
    )
}

// Recordemos que props lo podemos desestructurar, por lo tanto ahora quedara asi
// Como Education tiene varios institutes estos se van a repetir varias veces por lo tanto es necesario usar el key en nuestra App
const Education2 = ({institute}) => {
    return(
        <li>{institute}</li>
    )
}

// Necesitamos desestructurar education
// Ya desestruturado los pasamos a nuesta App
const { education } = state;

// Desestructuramos tambien personalData
// A name le damos un alias, ya que name suele se una palabra reservada
// Ya desestruturado los pasamos a nuesta App
// const {name=nombre, nationality,age,occupation,avatar}=state.personalData;


// Aqui ya dejamos de pasar los datos hardcodeamos a nustra App
// Lo que hacemos es tomar los datos directos del objeto
// Ahora que queremos agregar nuestro componente education, necesitamos recorrelo ya que es un arreglo, por lo tanto usamos map, no olvidar colocar el key para que renderize de forma adecuada
const App3 = (
    <div>
        <Header3/>
        <Info3
            name={state.personalData.name}
            nationality={state.personalData.nationality}
            age={state.personalData.age}
            occupation={state.personalData.occupation}
            avatar={state.personalData.avatar}
        />
        <ul>
        {
            education.map(intem => 
                <Education2
                    key={intem.id}
                    institute={intem.institute}
                />
            )
        }
        </ul>
    </div>
);

const htmlElement = document.getElementById("root");
ReactDOM.render(App3, htmlElement);