import React, { Component } from 'react'
import Header from './../../common/header/index.jsx'
import Footer from './../../common/footer.jsx'
import Highlights from './highlights.jsx'

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
      <div>
        <Header />
        <Highlights />
        <Footer />
      </div>
    )
  }
}

export default Docs
