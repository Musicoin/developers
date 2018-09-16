import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

import style from './Footer.css'

class Footer extends Component {
  render () {
    return (
      <div className='inverted'>
        <div className='container pv50'>
          <div className='row'>
            <div className='col-6 col-md-3 wallet-icons'>
              <a href="https://mycrypto.com/"><img src='/img/footer/mycrypto.png' alt='' height='50' /></a>
            </div>
            <div className='col-6 col-md-3 wallet-icons fit'>
              <a href="https://www.coinomi.com/"><img src='/img/footer/coinomi.png' alt='' height='50' /></a>
            </div>
            <div className='col-6 col-md-3 wallet-icons fit'>
              <a href="https://bittrex.com"><img src='/img/footer/bittrex.png' alt='' height='50' /></a>
            </div>
            <div className='col-6 col-md-3 wallet-icons fitr'>
              <a href="https://cryptopia.com"><img src='/img/footer/cryptopia.png' alt='' height='50' /></a>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 col-md-3 mt40'>
              <ul className='footer-icon center-mobile'>
                <li><a href='https://github.com/Musicoin' target="_blank"><i className='fab fa-github' /></a></li>
                <li><a href='http://facebook.com/lovemusicoin/' target="_blank"><i className='fab fa-facebook-f' /></a></li>
                <li><a href='https://twitter.com/musicoins' target="_blank"><i className='fab fa-twitter' /></a></li>
              </ul>
            </div>
            <div className='col-12 col-md-6 mt40'>
              <div className='row center-mobile'>
                <div className='col'>
                  <h4 className='footer-title'>About</h4>
                  <ul className='footer-links'>
                    <li><a href="https://musicoin.org/how-it-works" style={{color: 'white'}}>How its works</a></li>
                    <li><a href="https://musicoin.org/musicians" style={{color: 'white'}}>Currency</a></li>
                    <li><a href="https://musicoin.org/resources/faq" style={{color: 'white'}}>FAQ</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-3 center-mobile mt40 footer-icon-musicoin'>
              <a href="https://musicoin.org"><img src='/img/logo.svg' alt='' height='50' /></a>
            </div>
          </div>
          <div className='row mt40'>
            <span className='col-md-6 footer-text center-mobile'>
            <a href="https://musicoin.org/legal/tos" style={{color: 'white'}}>Terms of use</a> - <a href="https://musicoin.org/legal/legal" style={{color: 'white'}}>Privacy Policy</a>
            </span>
            <span className='col-md-6 footer-text center-mobile tard'>© 2018 MUSICOIN | POWERED BY $MUSIC</span>
          </div>
        </div>
      </div>


    )
  }
}

// export default Footer
export { Footer }
