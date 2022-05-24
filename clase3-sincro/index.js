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

const Header =() => {
    return (
        <header style={{with: "100%", height: "20vh"}}>
            <nav style={{with: "100%"}}>
                <ul style={{display: "flex", justifyContent: "space-evenly", listStyle: "none"}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Movies</li>
                </ul>
            </nav>
        </header>
    )
};

const Info =({name, nationality, age, occupation, avatar}) => {
    <main>
        <seccion>
            <h1>Name: {name}</h1>
            <p>Nationality: {nationality}</p>
            <p>Age: {age} years old</p>
            <p>Occupation: {occupation}</p>
        </seccion>
        <seccion style={{width: "300px"}}>
            <img style={{width: "200px", height: "160px"}} src="" alt="profile"/>
        </seccion>
    </main>
}

const Education = (props) => {
    return (
        <li>{props.institute}</li>
    )
}

const {education} = state;
const {name=nombre, nationality,age,occupation,avatar}=state.personalData; 
const App = (
    <div>
        <Header/>
        <Info
            name={nombre}
            nationality={nationality}
            age={age}
            occupation={occupation}
            avatar={avatar}
        />
    </div>
);

const htmlElement = document.getElementById("root");

ReactDOM.render(App, htmlElement);