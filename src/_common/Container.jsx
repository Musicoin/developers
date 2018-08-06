import React, {Component} from 'react'
// import { Link } from 'react-router'
// import PropTypes from 'prop-types'

class Container extends Component {
  render () {
    // This must be exactly one element or it will warn.
    const children = this.props.children
    return (
      <div className='container'>
        {children}
      </div>
    )
  }
}
// Container.propTypes = {
//   children: PropTypes.element.isRequired
// }
export default Container
