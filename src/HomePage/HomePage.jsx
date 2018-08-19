import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Tabs from '../_common/Tabs/Tabs.jsx'
import {Footer} from '../_common/Footer'
import style from './HomePage.css'

class RightLinks extends React.Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li><a href='/signup'>Sign Up</a></li>
      </div>
    )
  }
}
class HomePage extends React.Component {
  componentDidMount () {

  }
  componentWillUnmount () {

  }

  render () {
    const { user } = this.props
    return (
      <div>
        <div className='hero-unit'>
          <div className='overlay' />
          <div className='container'>

            <header className='row'>
              <div className='mouse-helper-black'>
                <span>Scroll Down</span>
                <i className='icon ion-mouse-black' />
              </div>
              <div className='col-md-6 col-sm-6'>
                <div className='logo'>
                  <img src='/img/logo.svg' alt='logo' width='200' height='80' />
                </div>
              </div>
              <div className='col-md-6 col-sm-6 clearfX'>
                <ul className='right-links text-center'>
                  {localStorage.getItem('user')
                    ? <li><Link to='/profile'> Hi {user.user.email}! </Link></li>
                    : <RightLinks /> }
                </ul>
              </div>
            </header>

            <div className='cta'>
              <div className='row'>
                <aside className='col-md-12'>

                  <h1 className='center-mobile hBwQAi'>
                    <span className='lefQSH'>Musicoin</span><br />
                    <span className='font-light'>Developers</span>
                  </h1>
                  <Link to='/documentation' className='gmSlMb btn mt20'>Learn More</Link>

                </aside>

              </div>
            </div>

          </div>

        </div>

        <div className='section-spacing'>
          <div className='container'>
            <h2 className='text-center mb20 gradiant-text eotYOT'>API</h2>
            <div className='row'>
              <div className='col-md-12'>
                <Tabs>
                  <div label='free'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et diam a diam aliquam bibendum. Praesent leo mauris, varius non molestie ut, auctor sit amet est. Nunc blandit leo at risus pellentesque viverra. Aliquam pulvinar felis sed tortor tincidunt, vitae accumsan neque rhoncus. Etiam sed nisl pulvinar, condimentum elit ac, maximus nisi. Fusce neque erat, ultrices sed nisi sed, sollicitudin facilisis quam. Nam a dui rhoncus, sagittis metus sed, eleifend nunc. Praesent fringilla ligula nisi, a fermentum nulla faucibus nec. Fusce imperdiet neque ac urna gravida dignissim. Sed rutrum quam diam, vitae ornare nulla ultrices tempor. Praesent mattis augue ligula, sed tristique orci suscipit molestie.</p>
                  </div>
                  <div label='developers'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et diam a diam aliquam bibendum. Praesent leo mauris, varius non molestie ut, auctor sit amet est. Nunc blandit leo at risus pellentesque viverra. Aliquam pulvinar felis sed tortor tincidunt, vitae accumsan neque rhoncus. Etiam sed nisl pulvinar, condimentum elit ac, maximus nisi. Fusce neque erat, ultrices sed nisi sed, sollicitudin facilisis quam. Nam a dui rhoncus, sagittis metus sed, eleifend nunc. Praesent fringilla ligula nisi, a fermentum nulla faucibus nec. Fusce imperdiet neque ac urna gravida dignissim. Sed rutrum quam diam, vitae ornare nulla ultrices tempor. Praesent mattis augue ligula, sed tristique orci suscipit molestie.</p>
                  </div>
                  <div label='enterprise'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et diam a diam aliquam bibendum. Praesent leo mauris, varius non molestie ut, auctor sit amet est. Nunc blandit leo at risus pellentesque viverra. Aliquam pulvinar felis sed tortor tincidunt, vitae accumsan neque rhoncus. Etiam sed nisl pulvinar, condimentum elit ac, maximus nisi. Fusce neque erat, ultrices sed nisi sed, sollicitudin facilisis quam. Nam a dui rhoncus, sagittis metus sed, eleifend nunc. Praesent fringilla ligula nisi, a fermentum nulla faucibus nec. Fusce imperdiet neque ac urna gravida dignissim. Sed rutrum quam diam, vitae ornare nulla ultrices tempor. Praesent mattis augue ligula, sed tristique orci suscipit molestie.</p>
                  </div>
                </Tabs>

              </div>
            </div>
          </div>
        </div>

        <div className='inverted section-spacing'>
          <div className='container'>
            <h2 className='text-center mb20 gradiant-text eotYOT'>About Musicoin</h2>
            <div className='row'>
              <div className='col-md-12 mbs justify ligth row-eq-height '>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et diam a diam aliquam bibendum. Praesent leo mauris, varius non molestie ut, auctor sit amet est. Nunc blandit leo at risus pellentesque viverra. Aliquam pulvinar felis sed tortor tincidunt, vitae accumsan neque rhoncus. Etiam sed nisl pulvinar, condimentum elit ac, maximus nisi. Fusce neque erat, ultrices sed nisi sed, sollicitudin facilisis quam. Nam a dui rhoncus, sagittis metus sed, eleifend nunc. Praesent fringilla ligula nisi, a fermentum nulla faucibus nec. Fusce imperdiet neque ac urna gravida dignissim. Sed rutrum quam diam, vitae ornare nulla ultrices tempor. Praesent mattis augue ligula, sed tristique orci suscipit molestie.</p>

                <p>Maecenas in ipsum sit amet purus suscipit tristique. Suspendisse potenti. Aliquam erat volutpat. Donec dictum bibendum tristique. Praesent quis ultrices augue, sed pulvinar tortor. Suspendisse dictum ligula neque, id ultricies ex accumsan eu. Vivamus blandit enim vitae tellus elementum, ut sollicitudin sapien sollicitudin. Nunc sodales lobortis ullamcorper. Ut laoreet venenatis congue.</p>

              </div>

              <div className='col-md-4 pr-4'>
                <div className='jKSHGy dGMIhG'> <div className='inside iSDs'>
                  <p className='pbs1'>Free</p>
                  <div className='mr-2'>
                    <span className='pbs2'>500 API Calls</span>
                  </div>
                </div>
                </div>
              </div>
              <div className='col-md-4 pr-4'>
                <div className='jKSHGy dGMIhH'> <div className='inside iSDs'>
                  <p className='pbs1'>Developers</p>
                  <div className='mr-2'>
                    <span className='pbs2'>10K API Calls</span>
                  </div>
                </div>
                </div>
              </div>
              <div className='col-md-4 pr-4'>
                <div className='jKSHGy dGMIhI'> <div className='inside iSDs'>
                  <p className='pbs1'>Enterprise</p>
                  <div className='mr-2'>
                    <span className='pbs2'>Private</span>
                  </div>
                </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='bg-grey section-spacing'>
          <div className='container'>
            <h2 className='text-center mb20 gradiant-text eotYOT'>Contact</h2>
            <div className='row'>
              <div className='col-md-6'>
                <h2>We’d love to hear from you</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et diam a diam aliquam bibendum. Praesent leo mauris, varius non molestie ut, auctor sit amet est.</p>
                <p><a href='#' className='bgmSlMb btn'>Get in touch</a></p>
              </div>
              <div className='col-md-6'>
                <h2>Connect with our communities</h2>
                <ul className='sc-gzVnrw fhxDdR'>
                  <li className='sc-htoDjs dtoqGy'><a href='http://github.com/musicoin'><i className='fab fa-github' /> Github</a></li>
                  <li className='sc-htoDjs dtoqGy'><a href='http://stackoverflow.com'> <i className='fab fa-stack-overflow' /> StackOverflow</a>
                  </li>
                  <li className='sc-htoDjs dtoqGy'><a href='http://slack.com'><i className='fab fa-slack' /> Slack</a></li>
                  <li className='sc-htoDjs dtoqGy'><a href='http://twitter.com/musicoins'><i className='fab fa-twitter' /> Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    )
  }
}

function mapStateToProps (state) {
  const { authentication } = state
  const { user } = authentication
  return {
    user
  }
}

const connectedHomePage = connect(mapStateToProps)(HomePage)
export { connectedHomePage as HomePage }
