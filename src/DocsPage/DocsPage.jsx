import React from 'react'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/atom-one-dark.css'
import { Header } from '../_common/Header'
import Container from '../_common/Container.jsx'
import './DocsPage.css'

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

          <h1 className='super-big mt80'>Platform<br />Documentation </h1>
          <div className='col-md-12'>
            <p className='lead'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          </div>
          <div className='row mt80 mb40'>
            <div className='col-6 col-md-2'>
              <div className='jKSHGyz b-gold'>
                <div className='inside icon-dev'>
                  <i className='fas fa-code' />
                </div>
              </div>
              <div className='text-dev'>
              web api
            </div>
            </div>
            <div className='col-6 col-md-2'>
              <div className='jKSHGyz b-gold'>
                <div className='inside icon-dev'>
                  <i className='fas fa-code' />
                </div>
              </div>
              <div className='text-dev'>
              web <br />playback sdk
            </div>
            </div>
            <div className='col-6 col-md-2'>
              <div className='jKSHGyz b-gold'>
                <div className='inside icon-dev'>
                  <i className='fas fa-code' />
                </div>
              </div>
              <div className='text-dev'>
              ios sdk
            </div>
            </div>
            <div className='col-6 col-md-2'>
              <div className='jKSHGyz b-gold'>
                <div className='inside icon-dev'>
                  <i className='fas fa-code' />
                </div>
              </div>
              <div className='text-dev'>
              ios app
            </div>
            </div>
            <div className='col-6 col-md-2'>
              <div className='jKSHGyz b-gold'>
                <div className='inside icon-dev'>
                  <i className='fas fa-code' />
                </div>
              </div>
              <div className='text-dev'>
              android sdk
            </div>
            </div>
            <div className='col-6 col-md-2'>
              <div className='jKSHGyz b-gold'>
                <div className='inside icon-dev'>
                  <i className='fas fa-code' />
                </div>
              </div>
              <div className='text-dev'>
              android app
            </div>
            </div>

          </div>
          <div className='col-md-12'>
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

export { DocsPage }
