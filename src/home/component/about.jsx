import React, { Component } from 'react'

var Translate = require('react-redux-i18n').Translate

class About extends Component {
  render () {
    return (
      <div className="inverted section-spacing">
        <div className="container">
          <h2 className="text-center mb20 gradiant-text eotYOT">About Musicoin</h2>
          <div className="row">
            <div className="col-md-12 mbs">

             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et diam a diam aliquam bibendum. Praesent leo mauris, varius non molestie ut, auctor sit amet est. Nunc blandit leo at risus pellentesque viverra. Aliquam pulvinar felis sed tortor tincidunt, vitae accumsan neque rhoncus. Etiam sed nisl pulvinar, condimentum elit ac, maximus nisi. Fusce neque erat, ultrices sed nisi sed, sollicitudin facilisis quam. Nam a dui rhoncus, sagittis metus sed, eleifend nunc. Praesent fringilla ligula nisi, a fermentum nulla faucibus nec. Fusce imperdiet neque ac urna gravida dignissim. Sed rutrum quam diam, vitae ornare nulla ultrices tempor. Praesent mattis augue ligula, sed tristique orci suscipit molestie.</p>

             <p>Maecenas in ipsum sit amet purus suscipit tristique. Suspendisse potenti. Aliquam erat volutpat. Donec dictum bibendum tristique. Praesent quis ultrices augue, sed pulvinar tortor. Suspendisse dictum ligula neque, id ultricies ex accumsan eu. Vivamus blandit enim vitae tellus elementum, ut sollicitudin sapien sollicitudin. Nunc sodales lobortis ullamcorper. Ut laoreet venenatis congue.</p>

            </div>
            
            <div className="col-md-4 pr-4">
              <div className="jKSHGy"> <div className="inside">
                <p className="pbs1">Free</p>
                <div className="mr-2">
                  <span className="pbs2">500 API Calls</span>
                </div>
                </div> 
              </div>
            </div>
            <div className="col-md-4 pr-4">
            <div className="jKSHGy"> <div className="inside">
                <p className="pbs1">Developers</p>
                <div className="mr-2">
                  <span className="pbs2">10K API Calls</span>
                </div>
                </div> 
              </div>
            </div>
            <div className="col-md-4 pr-4">
            <div className="jKSHGy"> <div className="inside">
                <p className="pbs1">Enterprise</p>
                <div className="mr-2">
                  <span className="pbs2">500 API Calls</span>
                </div>
                </div> 
              </div>
            </div>
            
          </div>
        </div>
      </div>

    )
  }
}

export default About



