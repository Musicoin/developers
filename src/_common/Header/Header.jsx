import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import style from './Header.css'

class Header extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            {/* <img src='/img/logo-white.svg' alt='' width='180' /> */}
            <img src='/img/logo-dev-white.svg' alt='' />

          </a>
          {/* <span className='fdev'>for Developers</span> */}
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#nav-musicoin' aria-controls='nav-musicoin' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='nav-musicoin'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item '>
                <NavLink to='/documentation' activeclassname='active' className='nav-link'> DOCS </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/profile' activeclassname='active' className='nav-link'> DASHBOARD </NavLink>
              </li>

              <li className='nav-item '>
                <NavLink to='/web-console' activeclassname='active' className='nav-link'> WEB CONSOLE </NavLink>
              </li>
              <li className='nav-item'><a className='nav-link' href='#'>COMUNITY</a></li>
              <li className='nav-item'><a className='nav-link' href='#'>USE CASES</a></li>
            </ul>

            {localStorage.getItem('user')
            ? <Link to='/profile' className='nav-link butbotcol'> Profile </Link>
            : <p>Profile no</p> }

          </div>
        </div>

      </nav>

    )
  }
}

export { Header }
