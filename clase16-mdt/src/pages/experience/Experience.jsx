import React from 'react';
import Tarjeta from '../../components/Tarjeta';

const Experience = ({ experience }) => {
    return (
        <div>
            <h1>Movies</h1>
            <Tarjeta items={experience}/>
        </div>
    )
}

export default Experience;