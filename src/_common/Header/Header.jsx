import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import style from './Header.css'

class Header extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <img src='/img/logo-dev-white.svg' alt='' />
          </a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#nav-musicoin' aria-controls='nav-musicoin' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='nav-musicoin'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item '>
                <NavLink to='/clients' activeclassname='active' className='nav-link'> CLIENTS </NavLink>
              </li>
              <li className='nav-item '>
                <NavLink to='/docs' activeclassname='active' className='nav-link'> DOCS </NavLink>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='https://forum.musicoin.org' target="_blank"> COMMUNITY</a>
              </li>
              <li className='nav-item '>
                <NavLink to='/profile' activeclassname='active' className='nav-link'> PROFILE </NavLink>
              </li>
              <li className='nav-item '>
                <NavLink to='/embedded' activeclassname='active' className='nav-link'> PLAYER </NavLink>
              </li>
            </ul>

            {localStorage.getItem('user')
            ? <Link to='/login' className='nav-link butbotcol rounded-button'> Logout </Link>
            : <p>Profile no</p> }

          </div>
        </div>

      </nav>

    )
  }
}

export { Header }
