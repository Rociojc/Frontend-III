import React from 'react';
import { Tarjeta } from '../../Style/AboutStyle';

const About = ({ name, lastname, nationality, age, occupation, bio}) => {
    return (
        <main>
            <h1>Personal Information</h1>
            <Tarjeta>
                <h2>Name: {name} {lastname}</h2>
                <p>Nationality: {nationality}</p>
                <p>Age: {age} years old</p>
                <p>Occupation: {occupation}</p>
                <h2>Biography</h2>
                <p>{bio}</p>
            </Tarjeta>
        </main>
    )
}

export default About;