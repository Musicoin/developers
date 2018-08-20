import React from 'react'
import '../../node_modules/highlight.js/styles/atom-one-dark.css'
import { Header } from '../_common/Header'
import Container from '../_common/Container.jsx'
import Modal from 'react-modal'
import './ClientsPage.css'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '0',
    border                : 'none',
    // width                 : '40%',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
};

class ClientsPage extends React.Component {
  componentDidMount () {
  }
  componentWillUnmount () {
  }

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render () {
    return (
      <div>
        <Header />
        <Container>
          <h1 className='super-big mt80'>Client Dashboard</h1>
          <p className='lead'>You can Generate a clientID, upgrade plans and monitor rate limits via the services provided below.
            While generating a clientID, you are required to provide your application's intended purpose (Web, Android / iOS App)
            for easy tracking by Musicoin regarding ewhether the clients are being used for their intended purpose. Usage of
            the Musicoin API found to be in violation with the Musicoin terms of service may be subject to legal action.
          </p>
          <button onClick={this.openModal}>Create App</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}
          >
            <div className="header-modal-app">
              <div className="inside-modal">
                <h3 ref={subtitle => this.subtitle = subtitle}>CREATE APP OR HARDWARE INTEGRATION</h3>
                <p className="text-center stepModal">Step 1/2</p>
              </div>
            </div>
            <div className="inside-modal">
            <form>
              <div className="form-group">
                <label htmlFor="app_anme">App or hardware name <span className="red">*</span></label>
                <input type="text" className="form-control inputForm" id="app_anme" aria-describedby="emailHelp" placeholder="Max. 60 Characteres"/>
              </div>
              <div className="form-group">
                <label htmlFor="app_description">App or hardware description <span className="red">*</span></label>
                <input type="text" className="form-control inputForm textForm" id="app_description" placeholder="Describe your app or hardware. Max 250 Characteres."/>
              </div>
              <ul className="unstyled checkbox-list">
                <li>
                  <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1"/>
                  <label htmlFor="styled-checkbox-1">I dont't now</label>
                </li>
                <li>
                  <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value1"/>
                  <label htmlFor="styled-checkbox-2">Mobile App</label>
                </li>
                <li>
                  <input className="styled-checkbox" id="styled-checkbox-3" type="checkbox" value="value1"/>
                  <label htmlFor="styled-checkbox-3">Desktop App</label>
                </li>
                <li>
                  <input className="styled-checkbox" id="styled-checkbox-4" type="checkbox" value="value1"/>
                  <label htmlFor="styled-checkbox-4">Website</label>
                </li>
                <li>
                  <input className="styled-checkbox" id="styled-checkbox-5" type="checkbox" value="value1"/>
                  <label htmlFor="styled-checkbox-5">Speaker</label>
                </li>
              </ul>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {/* <button onClick={this.closeModal} className="closeModal">X</button> */}
            </div>
          </Modal>
          <div className='row mt80 mb40'>
            <div className='col-6 col-md-4'>
              <div className='jKSHGyz b-gold'>
                <div className='inside icon-dev'>
                  <i className='fas fa-code' />
                </div>
              </div>
              <div className='text-dev'>
              web app
            </div>
            </div>
            <div className='col-6 col-md-4'>
              <div className='jKSHGyz b-gold'>
                <div className='inside icon-dev'>
                  <i className='fas fa-code' />
                </div>
              </div>
              <div className='text-dev'>
              ios app
            </div>
            </div>
            <div className='col-6 col-md-4'>
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
        </Container>
      </div>

    )
  }
}

export { ClientsPage }
