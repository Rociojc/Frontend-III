import React from 'react'
import { Link } from "react-router-dom"
import { Header, Nav } from '../Style/NavigationStyle'

function Navigation() {
  return (
    <Header>
        <nav>
            <Nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/experience">Experience</Link>
                </li>
                <li>
                    <Link to="/education">Education</Link>
                </li>
            </Nav>
        </nav>
    </Header>
  )
}

export default Navigation;