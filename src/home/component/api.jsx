import React, { Component } from 'react'

var Translate = require('react-redux-i18n').Translate

class Api extends Component {
  render () {
    return (
      <div className="section-spacing">
        <div className="container">
          <h2 className="text-center mb20 gradiant-text eotYOT">API</h2>
          <div className="row">
            <div className="col-md-12">

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="apifree-tab" data-toggle="tab" href="#apifree" role="tab" aria-controls="apifree" aria-selected="true">Free</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="apidevelopers-tab" data-toggle="tab" href="#apidevelopers" role="tab" aria-controls="apienterprise" aria-selected="false">Developers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="apienterprise-tab" data-toggle="tab" href="#apienterprise" role="tab" aria-controls="apienterprise" aria-selected="false">Enterprise</a>
              </li>
            </ul>
            
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="apifree" role="tabpanel" aria-labelledby="apifree-tab">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et diam a diam aliquam bibendum. Praesent leo mauris, varius non molestie ut, auctor sit amet est. Nunc blandit leo at risus pellentesque viverra. Aliquam pulvinar felis sed tortor tincidunt, vitae accumsan neque rhoncus. Etiam sed nisl pulvinar, condimentum elit ac, maximus nisi. Fusce neque erat, ultrices sed nisi sed, sollicitudin facilisis quam. Nam a dui rhoncus, sagittis metus sed, eleifend nunc. Praesent fringilla ligula nisi, a fermentum nulla faucibus nec. Fusce imperdiet neque ac urna gravida dignissim. Sed rutrum quam diam, vitae ornare nulla ultrices tempor. Praesent mattis augue ligula, sed tristique orci suscipit molestie.</p>

                <p>Maecenas in ipsum sit amet purus suscipit tristique. Suspendisse potenti. Aliquam erat volutpat. Donec dictum bibendum tristique. Praesent quis ultrices augue, sed pulvinar tortor. Suspendisse dictum ligula neque, id ultricies ex accumsan eu. Vivamus blandit enim vitae tellus elementum, ut sollicitudin sapien sollicitudin. Nunc sodales lobortis ullamcorper. Ut laoreet venenatis congue.</p>
              </div>
              <div className="tab-pane fade" id="apidevelopers" role="tabpanel" aria-labelledby="apridevelopers-tab">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et diam a diam aliquam bibendum. Praesent leo mauris, varius non molestie ut, auctor sit amet est. Nunc blandit leo at risus pellentesque viverra. Aliquam pulvinar felis sed tortor tincidunt, vitae accumsan neque rhoncus. Etiam sed nisl pulvinar, condimentum elit ac, maximus nisi. Fusce neque erat, ultrices sed nisi sed, sollicitudin facilisis quam. Nam a dui rhoncus, sagittis metus sed, eleifend nunc. Praesent fringilla ligula nisi, a fermentum nulla faucibus nec. Fusce imperdiet neque ac urna gravida dignissim. Sed rutrum quam diam, vitae ornare nulla ultrices tempor. Praesent mattis augue ligula, sed tristique orci suscipit molestie.</p>


              </div>
              <div className="tab-pane fade" id="apienterprise" role="tabpanel" aria-labelledby="apienterprise-tab">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et diam a diam aliquam bibendum. Praesent leo mauris, varius non molestie ut, auctor sit amet est. Nunc blandit leo at risus pellentesque viverra. Aliquam pulvinar felis sed tortor tincidunt, vitae accumsan neque rhoncus. Etiam sed nisl pulvinar, condimentum elit ac, maximus nisi. Fusce neque erat, ultrices sed nisi sed, sollicitudin facilisis quam. Nam a dui rhoncus, sagittis metus sed, eleifend nunc. Praesent fringilla ligula nisi, a fermentum nulla faucibus nec. Fusce imperdiet neque ac urna gravida dignissim. Sed rutrum quam diam, vitae ornare nulla ultrices tempor. Praesent mattis augue ligula, sed tristique orci suscipit molestie.</p>

              <p>Maecenas in ipsum sit amet purus suscipit tristique. Suspendisse potenti. Aliquam erat volutpat. Donec dictum bibendum tristique. Praesent quis ultrices augue, sed pulvinar tortor. Suspendisse dictum ligula neque, id ultricies ex accumsan eu. Vivamus blandit enim vitae tellus elementum, ut sollicitudin sapien sollicitudin. Nunc sodales lobortis ullamcorper. Ut laoreet venenatis congue.</p>
              </div>
            </div>



             

            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Api



