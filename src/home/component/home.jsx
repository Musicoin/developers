import React, { Component } from 'react'
import Header from './header.jsx'
import About from './about.jsx'
import Api from './api.jsx'
import Contact from './contact.jsx'


var Translate = require('react-redux-i18n').Translate
class Home extends Component {
  componentDidMount () {
  }
  componentWillMount () {
  }



  render () {
    return (
      <div>
       <Header/>
       <About/>
       <Api/>
       <Contact/>
      </div>
    )
  }
}

export default Home
// export default connect(mapStateToProps, { showMenuDay })(Home)
