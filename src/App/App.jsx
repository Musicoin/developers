import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { history } from '../_helpers'
import { alertActions } from '../_actions'
import { PrivateRoute } from '../_components'
import { HomePage } from '../HomePage'
import { ProfilePage } from '../ProfilePage'
import {EmbeddedPage} from '../EmbeddedPage'
import { LoginPage } from '../LoginPage'
import { SignUpPage } from '../SignUpPage'
import { ForgotPassword } from '../ForgotPassword'
import { ResetPassword } from '../ResetPassword'
import { ClientsPage } from '../ClientsPage'
import { DocsPage } from '../DocsPage'
import { NoMatch } from '../_common/NoMatch'


// import { AltaPage } from '../AltaPage';

class App extends React.Component {
  constructor (props) {
    super(props)

    const { dispatch } = this.props
    history.listen((location, action) => {
            // clear alert on location change
      dispatch(alertActions.clear())
    })
  }



  render () {
    const { alert } = this.props
    return (
      <div className=''>
        {alert.message &&
        <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
        <Router history={history}>
          <Switch>
            <PrivateRoute path='/profile' component={ProfilePage} />
            <Route path='/embedded' component={EmbeddedPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignUpPage} />
            <Route path='/forgot' component={ForgotPassword} />
            <Route path='/reset-password/:code' component={ResetPassword} />
            <PrivateRoute path='/clients' component={ClientsPage} />
            <PrivateRoute path='/docs' component={DocsPage} />
            <Route exact path='/' component={HomePage} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { alert } = state
  return {
    alert
  }
}

const connectedApp = connect(mapStateToProps)(App)
export { connectedApp as App }
