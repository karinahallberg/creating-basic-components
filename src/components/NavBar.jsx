import React from 'react'
import { Nav, Bars, NavLink, NavMenu } from './NavBarElements'

export default function NavBar() {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}
