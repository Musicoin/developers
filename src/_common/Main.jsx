import React, {Component} from 'react'
import PropTypes from 'prop-types'
class Main extends Component {
  render () {
    // This must be exactly one element or it will warn.
    const children = this.props.children
    return (
      <div>
        {children}
      </div>
    )
  }
}
// Main.propTypes = {
//   children: PropTypes.element.isRequired
// }
export default Main
