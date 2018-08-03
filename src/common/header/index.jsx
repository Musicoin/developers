import React, { Component } from 'react'
import { Link } from 'react-router'
var Translate = require('react-redux-i18n').Translate
import style from './header.css'

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
                <Link to='/documentation' activeClassName='active' className='nav-link'> DOCS </Link>
              </li>
              <li className='nav-item'><a className='nav-link' href='#'>DASHBOARD</a></li>

              <li className='nav-item '>
                <Link to='/web-console' activeClassName='active' className='nav-link'> WEB CONSOLE </Link>
              </li>
              <li className='nav-item'><a className='nav-link' href='#'>COMUNITY</a></li>
              <li className='nav-item'><a className='nav-link' href='#'>USE CASES</a></li>
            </ul>

          </div>
        </div>

      </nav>

    )
  }
}

export default Header
