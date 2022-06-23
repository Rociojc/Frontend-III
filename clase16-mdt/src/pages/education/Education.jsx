import React from 'react';
import Tarjeta from '../../components/Tarjeta';

const Education = ({ education }) => {
    return (
        <div>
            <h1>Institutes</h1>
            <Tarjeta items={education}/>
        </div>
    )
}

export default Education;