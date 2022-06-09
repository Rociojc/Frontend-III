import Header from './Header';
import PersonalInformation from './PersonalInformation';
import SectionInfo from './SectionInfo';
import './App.css';
import { Info } from "./Data.js";


function App() {
  return (
    <div className="App">
      <Header/>
      <PersonalInformation
      name={Info.personalData.name}
      nationality={Info.personalData.nationality}
      age={Info.personalData.age}
      occupation={Info.personalData.occupation}
      avatar={Info.personalData.avatar}
      />
      <SectionInfo experience={Info.experience}/>
      <SectionInfo education={Info.education}/>
      <SectionInfo bio={Info.bio}/>


      <h1>Ejemplo 1</h1>
    </div>
  );
}

export default App;
