import React, { Component } from 'react'
import { Link } from 'react-router'

var Translate = require('react-redux-i18n').Translate
class Login extends Component {
  componentDidMount () {
    document.body.classList.toggle('isGradiant', true)
    document.body.classList.toggle('text-center', true)
  }
  componentWillMount () {
  }

  render () {
    return (
      <div className='mht'>
        <div className='col-md-4 mauto'>
          <form className='form-signin'>
            <h1 className='h3 mb-3'>Sign in</h1>
            <label htmlFor='inputEmail' className='sr-only'>Email address</label>
            <input type='email' id='inputEmail' className='form-control mb10' placeholder='Email address' required='' autoFocus='' />
            <label htmlFor='inputPassword' className='sr-only'>Password</label>
            <input type='password' id='inputPassword' className='form-control mb10' placeholder='Password' required='' />
            <button className='btn btn-lg btn-white btn-block' type='submit'>Sign in</button>
            <p className='mt-5 mb-3 text-mini'>Sign up with social media</p>

            <ul className='social-icon text-center'>
              <li><a href='#'><i className='fab fa-github' /></a></li>
              <li><a href='#'><i className='fab fa-facebook-f' /></a></li>
              <li><a href='#'><i className='fab fa-twitter' /></a></li>
              <li><a href='#'><i className='fab fa-google-plus-g' /></a></li>
            </ul>

            <p />
            <p className='mt-5 mb-3 text-muted'>
              <Link to='/'>
                <img src='/img/logo-white.svg' alt='Musicoin.org' width='250' height='87' />
              </Link>
            </p>

          </form>
        </div>
      </div>

    )
  }
}

export default Login
