import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const NavLink = styled(Link)`
  color: #fff;
  display: none;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`

export const Nav = styled.nav`
  background: #000;
  height: 75px;
  width: 85px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    height: 75px;
    width: 85px;
  }
`

export const Bars = styled(FaBars)`
  display: block;
  margin-left: 26px;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  color: #fff;
  cursor: pointer;
  font-size: 1.8rem;
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`
