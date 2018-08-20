import React from 'react'
import Highlight from 'react-highlight'
import { Header } from '../_common/Header'
import Container from '../_common/Container.jsx'

import '../../node_modules/highlight.js/styles/atom-one-dark.css'
import './ApiDocsPage.css'

class ApiDocsPage extends React.Component {
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
            Note: By using Musicoin developer tools, you accept the Musicoin Developer Terms of Service.
          </p>
          <p>
          Based on simple REST principles, the Musicoin Web API endpoints return JSON metadata about music artists, albums, and tracks, directly from the Musicoin Data Catalogue.
          </p>
          <img src='/img/webapi/webapi_intro.png' alt='' className='responsive' />
          <p>
          Web API also provides access to user related data, like playlists and music that the user saves in the Your Music library. Such access is enabled through selective authorization, by the user.
          </p>
          <p>
          The base address of Web API is <a href='https://api.musicoin.com'>https://api.musicoin.com</a>. The API provides a set of endpoints, each with its own unique path. To access private data through the Web API, such as user profiles and playlists, an application must get the user’s permission to access the data. Authorization is via the Musicoin Accounts service.
          </p>
          <h2>Requests</h2>
          <p>
          The Musicoin Web API is based on REST principles. Data resources are accessed via standard HTTPS requests in UTF-8 format to an API endpoint. Where possible, Web API uses appropriate HTTP verbs for each action:
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
                <td>Changes and/or replaces resources or collections</td>
              </tr>
              <tr>
                <td>DELETE</td>
                <td>Deletes resources</td>
              </tr>
            </tbody>
          </table>

          <div>
            <h2>Hello World</h2>
            <Highlight language='javascript'>
              {`function foo() { return 'bar' }`}
            </Highlight>
          </div>
        </Container>
      </div>

    )
  }
}

export { ApiDocsPage }
