import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

import Spinner from '../_common/Spinner.jsx'

// import './LoginPage.css';
class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
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
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
          <div className='mht'>
        <div className='col-md-4 mauto'>
          <form className='form-signin' name="form" onSubmit={this.handleSubmit}>
            <h1 className='h3 mb-3'>Log In</h1>
            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
              <label htmlFor='inputEmail' className='sr-only'>Email address</label>
                <input type="text" className="form-control" name="username" value={username} placeholder="Email Address" onChange={this.handleChange} />
                {submitted && !username &&
                    <div className="help-block">Email address is required</div>
                }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label htmlFor='inputPassword' className='sr-only'>Password</label>
                <input type="password" className="form-control mb10" name="password" value={password} placeholder="Password" onChange={this.handleChange} />
                {submitted && !password &&
                    <div className="help-block">Password is required</div>
                }

            </div>
            <button className='btn btn-lg btn-white btn-block' type='submit'>Log In</button>
              {loggingIn &&
                  <Spinner />
              }
            <p />
            <p className='mt-5 mb-3 text-muted'>
            <Link to='/'>
                <img src='/img/logo-dev-white.svg' alt='Musicoin Developers Logo' height='40' />
              </Link>
            </p>

          </form>
        </div>
      </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
