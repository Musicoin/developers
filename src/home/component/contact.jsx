import React, { Component } from 'react'

var Translate = require('react-redux-i18n').Translate

class Contact extends Component {
  render () {
    return (
      <div className='bg-grey section-spacing'>
        <div className='container'>
          <h2 className='text-center mb20 gradiant-text eotYOT'>Contact</h2>
          <div className='row'>
            <div className='col-md-6'>
              <h2>We’d love to hear from you</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et diam a diam aliquam bibendum. Praesent leo mauris, varius non molestie ut, auctor sit amet est.</p>
              <p><a href='#' className='bgmSlMb btn'>Get in touch</a></p>
            </div>
            <div className='col-md-6'>
              <h2>Connect with our communities</h2>
              <ul className='sc-gzVnrw fhxDdR'>
                <li className='sc-htoDjs dtoqGy'><a href='http://github.com/musicoin'><i className='fab fa-github' /> Github</a></li>
                <li className='sc-htoDjs dtoqGy'><a href='http://stackoverflow.com'> <i className='fab fa-stack-overflow' /> StackOverflow</a>
                </li>
                <li className='sc-htoDjs dtoqGy'><a href='http://slack.com'><i className='fab fa-slack' /> Slack</a></li>
                <li className='sc-htoDjs dtoqGy'><a href='http://twitter.com/musicoins'><i className='fab fa-twitter' /> Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Contact
