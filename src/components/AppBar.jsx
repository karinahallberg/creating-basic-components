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
        <Link to='#' className='menu-bars' id='burger-bar'>
          <VscIcons.VscMenu onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars' id='arrow-left'>
              <VscIcons.VscChevronLeft />
            </Link>
            <h1 id='menu-index'>Index</h1>
          </li>
          <section className='index-pages'>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </section>
        </ul>
      </nav>
    </>
  )
}

export default AppBar
