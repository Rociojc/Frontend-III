import React from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from '../Navigation';

function Layout({ children }) {
    const location = useLocation();
    let doesContainer = location.pathname.includes("login") || location.pathname.includes("sign_in")
  return (
    <>
        { doesContainer ? null : <Navigation/>}
        { children }
    </>
  )
}

export default Layout