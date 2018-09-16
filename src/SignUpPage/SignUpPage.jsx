import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
// import './SignUpPage.css';
class SignUpPage extends React.Component {
    constructor(props) {
        super(props);

        // reset signup status
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
            dispatch(userActions.signup(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
          <div className='mht'>
        <div className='col-md-4 mauto'>
          <form className='form-signin' name="form" onSubmit={this.handleSubmit}>
            <h1 className='h3 mb-3'>Sign Up</h1>
            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
              <label htmlFor='inputEmail' className='sr-only'>Email address</label>
                <input type="text" className="form-control" name="username" value={username} placeholder="Email Address" onChange={this.handleChange} />
                {submitted && !username &&
                    <div className="help-block">Username is required</div>
                }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label htmlFor='inputPassword' className='sr-only'>Password</label>
                <input type="password" className="form-control mb10" name="password" value={password} placeholder="Password" onChange={this.handleChange} />
                {submitted && !password &&
                    <div className="help-block">Password is required</div>
                }

            </div>
            <button className='btn btn-lg btn-white btn-block' type='submit'>Sign Up</button>
              {loggingIn &&
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
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

const connectedSignUpPage = connect(mapStateToProps)(SignUpPage);
export { connectedSignUpPage as SignUpPage };
