import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import Spinner from '../_common/Spinner.jsx'
// import './ForgotPassword.css';
class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);

        // reset signup status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount () {
      document.body.classList.toggle('isGradiant', true)
      document.body.classList.toggle('text-center', true)
    }
    componentWillUnmount () {
      document.body.classList.toggle('isGradiant', false)
      document.body.classList.toggle('text-center', false)
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username } = this.state;
        const { dispatch } = this.props;
        if (username) {
            dispatch(userActions.forgotPassword(username));
        }
    }

    render() {
        const { loggingIn, isSuccess } = this.props;
        const { username, submitted, } = this.state;
        return (
          <div className='mht'>
        <div className='col-md-4 mauto'>
          <form className='form-signin' name="form" onSubmit={this.handleSubmit}>
            <h1 className='h3 mb-3'>Forgot password</h1>
            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
              <label htmlFor='inputEmail' className='sr-only'>Email address</label>
                <input type="text" className="form-control" name="username" value={username} placeholder="Email Address" onChange={this.handleChange} />
                {submitted && !username &&
                    <div className="help-block">Email is required</div>
                }
            </div>

            <button className='btn btn-lg btn-white btn-block' type='submit'>Submit</button>

            {isSuccess && <div>
                <div>
                    If the email you entered exists, a reset link has been sent !
                </div>
            </div>}

              {loggingIn &&
                  <Spinner />
              }
            <p />
            <p className='mt-5 mb-3 text-muted'>
            <Link to='/'>
                <img src='/img/logo-dev-white.svg' alt='Musicoin Developers logo' height='40' />
              </Link>
            </p>
          </form>
        </div>
      </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn, isSuccess } = state.authentication;
    return {
        loggingIn,
        isSuccess
    };
}

const connectedForgotPassword = connect(mapStateToProps)(ForgotPassword);
export { connectedForgotPassword as ForgotPassword };
