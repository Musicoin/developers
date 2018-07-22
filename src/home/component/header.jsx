import React, { Component } from 'react'
import { Link } from 'react-router'
var Translate = require('react-redux-i18n').Translate

class Header extends Component {
  render () {
    return (
      <div className='hero-unit'>
        <div className='overlay' />
        <div className='container'>

          <header className='row'>
            <div className='col-md-6 col-sm-6'>
              <div className='logo'>
                <img src='/img/logo.svg' alt='logo' width='200' height='80' />
              </div>
            </div>
            <div className='col-md-6 col-sm-6 clearfX'>
              <ul className='right-links text-center'>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
                <li><a href='#' target='_blank'>Sign Up</a></li>
              </ul>
            </div>
          </header>

          <div className='cta'>
            <div className='row'>
              <aside className='col-md-12'>

                <h1 className='center-mobile hBwQAi'>
                  <span className='lefQSH'>Musicoin</span><br />
                  <span className='font-light'>Developers</span>
                </h1>
                <a href='#' className='gmSlMb btn mt20'>Learn More</a>

              </aside>

            </div>
          </div>

        </div>

      </div>

    )
  }
}

export default Header
