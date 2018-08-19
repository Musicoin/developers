import React from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { history } from '../_helpers'
import { alertActions } from '../_actions'
import { PrivateRoute } from '../_components'
import { HomePage } from '../HomePage'
import { ProfilePage } from '../ProfilePage'
import { LoginPage } from '../LoginPage'
import { SignUpPage } from '../SignUpPage'
import { DocsPage } from '../DocsPage'
import { ApiDocsPage } from '../ApiDocsPage'
import { DashboardPage } from '../DashboardPage'

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
          <div>
            <PrivateRoute path='/profile' component={ProfilePage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignUpPage} />
            <PrivateRoute path='/documentation' component={DocsPage} />
            <PrivateRoute path='/web-api' component={ApiDocsPage} />
            <PrivateRoute path='/dashboard' component={DashboardPage} />
            <Route exact path='/' component={HomePage} />
          </div>
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
