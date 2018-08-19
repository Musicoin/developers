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

          <h1 className='super-big mt80'>Web API Documentation</h1>
          <p className='lead'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          <div className='row mt80 mb40'>
            <img src="/img/webapi/webapi_intro.png" alt=""/>
          </div>
          <div>
          <Highlight innerHTML={true}>{'<p>Hello world</p>'}</Highlight>
          <Highlight language="javascript">
            {`function foo() { return 'bar' }`}
          </Highlight>
          </div>
        </Container>
      </div>

    )
  }
}

export { ApiDocsPage }
