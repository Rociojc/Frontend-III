import React from 'react'
import { Link } from "react-router-dom"
import { Header, Nav } from '../style/NavigationStyle'

function Navigation() {
  return (
    <Header>
        <nav>
            <Nav>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </Nav>
        </nav>
    </Header>
  )
}

export default Navigation;