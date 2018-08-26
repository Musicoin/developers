import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../_actions'

import Spinner from '../_common/Spinner.jsx'

// import './ResetPassword.css';
class ResetPassword extends React.Component {
  constructor (props) {
      super(props)

        // reset signup status
        this.props.dispatch(userActions.logout())

        this.state = {
          code: this.props.match.params.code,
          password: '',
          submitted: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
  componentDidMount () {
      console.log(this.props.match.params)
      document.body.classList.toggle('isGradiant', true)
      document.body.classList.toggle('text-center', true)
    }
  componentWillUnmount () {
      document.body.classList.toggle('isGradiant', false)
      document.body.classList.toggle('text-center', false)
    }
  handleChange (e) {
      const { name, value } = e.target
        this.setState({ [name]: value })
    }

  handleSubmit (e) {
      e.preventDefault()

        this.setState({ submitted: true })
        const { code, password } = this.state
        const { dispatch } = this.props
        if (code && password) {
          dispatch(userActions.resetPassword(code, password))
        }
    }

  render () {
      const { loggingIn } = this.props
        const { code, password, submitted } = this.state
        return (
          <div className='mht'>
            <div className='col-md-4 mauto'>
          <form className='form-signin' name='form' onSubmit={this.handleSubmit}>
            <h1 className='h3 mb-3'>Reset password</h1>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label htmlFor='inputEmail' className='sr-only'>Email address</label>
              <input type='text' className='form-control' name='password' value={password} placeholder='New Password' onChange={this.handleChange} />
              <input type='hidden' name='code' value={code} />

              {submitted && !password &&
                <div className='help-block'>password is required</div>
                }
            </div>

            <button className='btn btn-lg btn-white btn-block' type='submit'>Submit</button>
            {loggingIn &&
              <Spinner />
              }
            <p />
            <p className='mt-5 mb-3 text-muted'>
              <Link to='/'>
              <img src='/img/logo-white.svg' alt='Musicoin.org' width='250' height='87' />
            </Link>
            </p>

          </form>
        </div>
          </div>
        )
    }
}

function mapStateToProps (state) {
  const { loggingIn } = state.authentication
    return {
      loggingIn
    }
}

const connectedResetPassword = connect(mapStateToProps)(ResetPassword)
export { connectedResetPassword as ResetPassword }
