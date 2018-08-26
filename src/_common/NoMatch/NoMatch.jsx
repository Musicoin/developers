import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import style from './NoMatch.css'

class NoMatch extends Component {
  render () {
    return (
      <div>
        <h1>Upps!!</h1>
        <h3>No match for <code>{location.pathname}</code></h3>
      </div>

    )
  }
}

export { NoMatch }
