import './AppBar.css'
import { SideBarData } from './SideBarData'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as VscIcons from 'react-icons/vsc'

function AppBar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <VscIcons.VscMenu onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <VscIcons.VscChevronLeft />
            </Link>
          </li>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default AppBar
