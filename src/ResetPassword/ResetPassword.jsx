import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
// import './ResetPassword.css';
class ResetPassword extends React.Component {
    constructor(props) {
        super(props);

        // reset signup status
        this.props.dispatch(userActions.logout());

        this.state = {
            code: this.props.match.params.code,
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { code, password } = this.state;
        const { dispatch } = this.props;
        if (code && password) {
            dispatch(userActions.resetPassword(code, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { code, password, submitted } = this.state;
        return (
          <div className='mht'>
        <div className='col-md-4 mauto'>
          <form className='form-signin' name="form" onSubmit={this.handleSubmit}>
            <h1 className='h3 mb-3'>Reset password</h1>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label htmlFor='inputEmail' className='sr-only'>Email address</label>
                <input type="text" className="form-control" name="password" value={password} placeholder="New Password" onChange={this.handleChange} />
                <input type="hidden" name="code" value={code} />

                {submitted && !password &&
                    <div className="help-block">password is required</div>
                }
            </div>
      
            <button className='btn btn-lg btn-white btn-block' type='submit'>Submit</button>
              {loggingIn &&
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
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
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedResetPassword = connect(mapStateToProps)(ResetPassword);
export { connectedResetPassword as ResetPassword };
