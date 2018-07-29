import React, { Component } from 'react'
import Container from './../../common/container.component.jsx'
import style from './highlights.css'
var Translate = require('react-redux-i18n').Translate
class Docs extends Component {
  componentDidMount () {
    document.body.classList.toggle('isGradiant', false)
    document.body.classList.toggle('text-center', false)
  }
  componentWillMount () {
  }

  render () {
    return (
      <Container>
        <h1 className='super-big mt80'>Platform<br />Documentation </h1>
        <div className='col-md-12'>
          <p className='lead'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        </div>
        <div className='row mt80 mb40'>
          <div className='col-6 col-md-2'>
            <div className='jKSHGyz b-gold'>
              <div className='inside icon-dev'>
                <i className='fas fa-code' />
              </div>
            </div>
            <div className='text-dev'>
              web api
            </div>
          </div>
          <div className='col-6 col-md-2'>
            <div className='jKSHGyz b-gold'>
              <div className='inside icon-dev'>
                <i className='fas fa-code' />
              </div>
            </div>
            <div className='text-dev'>
              web <br />playback sdk
            </div>
          </div>
          <div className='col-6 col-md-2'>
            <div className='jKSHGyz b-gold'>
              <div className='inside icon-dev'>
                <i className='fas fa-code' />
              </div>
            </div>
            <div className='text-dev'>
              ios sdk
            </div>
          </div>
          <div className='col-6 col-md-2'>
            <div className='jKSHGyz b-gold'>
              <div className='inside icon-dev'>
                <i className='fas fa-code' />
              </div>
            </div>
            <div className='text-dev'>
              ios app
            </div>
          </div>
          <div className='col-6 col-md-2'>
            <div className='jKSHGyz b-gold'>
              <div className='inside icon-dev'>
                <i className='fas fa-code' />
              </div>
            </div>
            <div className='text-dev'>
              android sdk
            </div>
          </div>
          <div className='col-6 col-md-2'>
            <div className='jKSHGyz b-gold'>
              <div className='inside icon-dev'>
                <i className='fas fa-code' />
              </div>
            </div>
            <div className='text-dev'>
              android app
            </div>
          </div>

        </div>
      </Container>
    )
  }
}

export default Docs
