import React, { Component } from 'react'
import { Link } from 'react-router'
var Translate = require('react-redux-i18n').Translate

class Header extends Component {
  render () {
    return (
      <div className='inverted'>
        <div className='container pv50'>
          <div className='row'>
            <div className='col-6 col-md-3 wallet-icons'>
              <img src='/img/footer/mycrypto.jpg' alt='' height='50' />
            </div>
            <div className='col-6 col-md-3 wallet-icons fit'>
              <img src='/img/footer/coinomi.jpg' alt='' height='50' />
            </div>
            <div className='col-6 col-md-3 wallet-icons fit'>
              <img src='/img/footer/bittrex.jpg' alt='' height='50' />
            </div>
            <div className='col-6 col-md-3 wallet-icons fitr'>
              <img src='/img/footer/cryptopia.jpg' alt='' height='50' />
            </div>
          </div>

          <div className='row'>
            <div className='col-12 col-md-3 mt40'>
              <ul className='footer-icon center-mobile'>
                <li><a href='#'><i className='fab fa-github' /></a></li>
                <li><a href='#'><i className='fab fa-facebook-f' /></a></li>
                <li><a href='#'><i className='fab fa-twitter' /></a></li>
                <li><a href='#'><i className='fab fa-google-plus-g' /></a></li>
              </ul>
            </div>
            <div className='col-12 col-md-6 mt40'>
              <div className='row center-mobile'>
                <div className='col'>
                  <h4 className='footer-title'>About</h4>
                  <ul className='footer-links'>
                    <li>How its work</li>
                    <li>Currency</li>
                    <li>FAQ</li>
                  </ul>
                </div>
                <div className='col'>
                  <h4 className='footer-title'>About</h4>
                  <ul className='footer-links'>
                    <li>How its work</li>
                    <li>Currency</li>
                    <li>FAQ</li>
                  </ul>
                </div>
                <div className='col'>
                  <h4 className='footer-title'>About</h4>
                  <ul className='footer-links'>
                    <li>How its work</li>
                    <li>Currency</li>
                    <li>FAQ</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-3 center-mobile mt40 footer-icon-musicoin'>
              <img src='/img/logo.svg' alt='' height='50' />
            </div>
          </div>
          <div className='row mt40'>
            <span className='col-md-6 footer-text center-mobile'>
            Terms of use - Privacy Policy - Cookies
            </span>
            <span className='col-md-6 footer-text center-mobile tard'>© 2018 MUSICOIN | POWERED BY $MUSIC</span>
          </div>
        </div>
      </div>

    )
  }
}

export default Header
