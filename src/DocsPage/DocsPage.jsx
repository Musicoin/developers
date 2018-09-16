import React from 'react'
import Highlight from 'react-highlight'
import { Header } from '../_common/Header'
import Container from '../_common/Container.jsx'
import Tabs from '../_common/Tabs/Tabs.jsx'

import '../../node_modules/highlight.js/styles/atom-one-dark.css'
import './DocsPage.css'
import AuthenticationTab from './Tabs/AuthenticationTab.jsx'
import UserTab from './Tabs/UserTab.jsx'
import ReleaseTab from './Tabs/ReleaseTab.jsx'
import ArtistTab from './Tabs/ArtistTab.jsx'
import PlaylistTab from './Tabs/PlaylistTab.jsx'

class DocsPage extends React.Component {
  componentDidMount () {
  }
  componentWillUnmount () {
  }
  render () {
    return (
      <div>
        <Header />
        <Container>

          <h1 className='titlePage mt80'>Web API Documentation</h1>
          <p>
            Note: By using Musicoin Endpoints, you automatically accept the Musicoin Terms of Service.
          </p>
          <img src='/img/webapi/webapi_intro.png' alt='Musicoin WebAPI image' className='responsive' />
          <p>
            There are various endpoints that can be used to fetch data about artists, musicians and playlsits. Transaction log can also be fetched using the Musicoin API. Access is rate limited according to the API plan you have purchased.
          </p>
          <p>
            Your API plan is: Free / Basic / Enterprise
          </p>
          <p>
          All the endpoints have the base URL: <a href='https://api.musicoin.org'>https://api.musicoin.org</a>.
          The API provides a set of endpoints, each with its own unique path.
          </p>
          <p>
            Data provided through the Musicoin API is strictly in compliance with GDPR regulations. If you find any violations regarding the same, please direct your queries to legal@musicoin.org
          </p>
          <h2>Types of Requests</h2>
          <p>
            The Musicoin Web API uses the folowing standard HTTP verbs to define each action / endpoint.
          </p>

          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GET</td>
                <td>Retrieves resources</td>
              </tr>
              <tr>
                <td>POST</td>
                <td>Creates resources</td>
              </tr>
              <tr>
                <td>PUT</td>
                <td>Changes and / or replaces resources or collections</td>
              </tr>
              <tr>
                <td>DELETE</td>
                <td>Deletes resources</td>
              </tr>
            </tbody>
          </table>

          <div>
            <h2>API Endpoints</h2>

            <Tabs>
              <div label='Authentication'>
                <AuthenticationTab />
              </div>
              <div label='users'>
                <UserTab />
              </div>
              <div label='release'>
                <ReleaseTab />
              </div>

              <div label='Artist'>
                <ArtistTab />
              </div>
              <div label='Playlist'>
                <PlaylistTab />
              </div>
            </Tabs>
            <br />
          </div>
        </Container>
      </div>
    )}
  }

export { DocsPage }
