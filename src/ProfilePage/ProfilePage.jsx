import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../_actions'
import Main from '../_common/Main.jsx'
import { Header } from '../_common/Header'
import Container from '../_common/Container.jsx'

class ProfilePage extends React.Component {
  componentDidMount () {
    this.props.dispatch(userActions.getAll())
  }

  handleDeleteUser (id) {
    return (e) => this.props.dispatch(userActions.delete(id))
  }

  render () {
    const { user, users } = this.props
    console.log(user.user)
    return (
      <Main>
        <Header />
        <Container>

          <div className='col-md-6 col-md-offset-3'>

            <h1>Hi {user.user.email}!</h1>
            <p>You're logged in with React & JWT!!</p>
            <h3>Users from secure api end point:</h3>
            {users.loading && <em>Loading users...</em>}
            {users.message && <span className='text-danger'>ERROR: {users.message}</span>}
            {users.items &&
            <ul>
              {users.items.map((user, index) =>
                <li key={user._id}>
                  {user.email + ' ' + user.uuid + ' ' + user.avatar}
                </li>
                        )}
            </ul>
                }
            <p>
              <Link to='/login'>Logout</Link>
            </p>
            <p>
              <Link to='/alta'>Alta</Link>
            </p>
          </div>
        </Container>
      </Main>

    )
  }
}

function mapStateToProps (state) {
  const { users, authentication } = state
  const { user } = authentication
  return {
    user,
    users
  }
}

const connectedProfilePage = connect(mapStateToProps)(ProfilePage)
export { connectedProfilePage as ProfilePage }
