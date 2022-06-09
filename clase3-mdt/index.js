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

const Header =()=>{
    return (
        <header className="header">
            <nav className="header_nav">
                <ul className="header_ul">
                    <li className="header_li" >Home</li>
                    <li className="header_li">About</li>
                    <li className="header_li">experience</li>
                    <li className="header_li">Movies</li>
                </ul>
            </nav>
        </header>
    )
};

const Info = ({ name, lastname, nationality, age, occupation, residence, avatar})=>{
    return (
        <main className="main">
            <section>
                <h1>Name: {name} {lastname}</h1>
                <p>Nationality: {nationality}</p>
                <p>Age: {age} years old</p>
                <p>Occupation: {occupation}</p>
                <p>Residence: {residence}</p>
            </section>
            <section>
                <img className="imagen"
                    src={avatar} alt="profile picture"/>
            </section>
        </main>
    )
};

const Experience = ({ movie }) => {
    return(
        <li className="educacion_li">{movie}</li>
    )
}

const Education = ({ institute })=>{
    return(
        <li className="educacion_li">{institute}</li>
    )
}

const Bio = ({bio}) => {
    return (
        <p className="bio_p">Bio: {bio}</p>
    )
}

const { name, lastname, nationality, age, occupation, residence, avatar } = state.personalData;
const { experience, education, bio } = state;


const App = (
    <div>
        <Header/>
        <Info
            name={`${name} ${lastname}`}
            nationality={nationality}
            age={age}
            occupation={occupation}
            residence={residence}
            avatar={avatar}
        />
        <ul className="contenedor_ul">
            <div className="contenedor_exp">
                <h2>Experience</h2>
                {
                    experience.map(item =>
                        <Experience
                            key={item.id}
                            movie={item.movie}
                        />
                    )
                }
            </div>
            <div className="contenedor_edu">
                <h2>Education</h2>
                {
                    education.map(item =>
                        <Education 
                            key={item.id}
                            institute={item.institute}
                    
                        />
                    )
                }
            </div>
        </ul>
        <Bio
            bio={bio}
        />
    </div>
);

const htmlElement = document.getElementById("root");
ReactDOM.render(App, htmlElement);