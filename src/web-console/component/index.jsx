import React, { Component } from 'react'
import Header from './../../common/header/index.jsx'
import Footer from './../../common/footer.jsx'

var Translate = require('react-redux-i18n').Translate
class Home extends Component {
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
   
        <Footer />
      </div>
    )
  }
}

export default Home
