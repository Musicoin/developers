import React from 'react'
import Highlight from 'react-highlight'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../_actions'
import Main from '../_common/Main.jsx'
import { Header } from '../_common/Header'
import Container from '../_common/Container.jsx'

class EmbeddedPage extends React.Component {
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
          <div className='col-md-12 col-md-offset-3'>
            <h2>Instructions for setting up the Musicoin Player on your personal website</h2>
              <ol>
                <br />
                <li>
                  First navigate over to your song URL (musicoin.org/trackid) and find the share button
                  <br />
                  <br />
                  <img width="800px" src="/img/1.png"></img>
                </li>
                <br />
                <li>Click on the "Share button" and navigate to the "Embed" Tab
                  First navigate over to your song URL (musicoin.org/trackid) and find the share button
                  <br />
                  <br />
                  <img width="800px" src="/img/2.png"></img>
                </li>
                <br />
                <li>Copy the code given under the "Source Code" Window. It should look something similar to the examples attached below
                  First navigate over to your song URL (musicoin.org/trackid) and find the share button
                  <br />
                  <br />
                  <img width="800px" src="/img/3.png"></img>
                </li>
                <li>Adjust the size according to the page width and you have your Musicoin player ready!
<br />
<br />
<Highlight className='html'>
{`<iframe width="400px" id="embedded-player-preview-frame" src="https://musicoin.org/embedded-player/0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f?embedded=true&autoQueue=true&preview=true"></iframe>`}
</Highlight>
<iframe width="400px" id="embedded-player-preview-frame" src="https://musicoin.org/embedded-player/0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f?embedded=true&autoQueue=true&preview=true"></iframe>
<br />
<br />
<Highlight className='html'>
{`<iframe width="500px" id="embedded-player-preview-frame" src="https://musicoin.org/embedded-player/0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f?embedded=true&autoQueue=true&preview=true"></iframe>`}
</Highlight>
<iframe width="500px" id="embedded-player-preview-frame" src="https://musicoin.org/embedded-player/0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f?embedded=true&autoQueue=true&preview=true"></iframe>
<br />
<br />
<Highlight className='html'>
{`<iframe width="600px" id="embedded-player-preview-frame" src="https://musicoin.org/embedded-player/0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f?embedded=true&autoQueue=true&preview=true"></iframe>`}
</Highlight>
<iframe width="600px" src="https://musicoin.org/embedded-player/0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f?embedded=true&autoQueue=true&preview=true"></iframe>
/* Embedded music player guidelines
<iframe height="400px" width="800px" id="embedded-player-preview-frame" src="https://musicoin.org/artist/0x601dd2de59a5295dcfffc99ddc188ee3488bc8d0"></iframe>
*/
                </li>
              </ol>
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

const connectedEmbeddedPage = connect(mapStateToProps)(EmbeddedPage)
export { connectedEmbeddedPage as EmbeddedPage }
