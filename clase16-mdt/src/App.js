import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Education from './pages/education/Education';
import Experience from './pages/experience/Experience'
import About from './pages/about/About'
import Home from './pages/home/Home';
import Navigation from './components/Navigation';
import { Info } from './Data';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route path="/" exact element={
            <Home
            avatar={Info.personalData.avatar}
            />
            }/>
          <Route path="/about" element={
            <About
            name={`${Info.personalData.name} ${Info.personalData.lastname}`}
            nationality={Info.personalData.nationality}
            age={Info.personalData.age}
            occupation={Info.personalData.occupation}
            bio={Info.bio}
            />
            }/>
          <Route path="/experience" element={
          <Experience
          experience={Info.experience}
          />
          }/>
          <Route path="/education" element={
          <Education
          education={Info.education}
          />
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
