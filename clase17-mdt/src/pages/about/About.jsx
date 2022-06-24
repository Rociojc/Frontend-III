import React from "react";
import { useNavigate } from "react-router-dom"; //useNavigate es una funcion

const About = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>This is About</h1>
        </div>
    )
}

export default About;