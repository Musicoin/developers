import React from 'react'
import Highlight from 'react-highlight'
import { Header } from '../_common/Header'
import Container from '../_common/Container.jsx'

import '../../node_modules/highlight.js/styles/atom-one-dark.css'
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

          <h1 className='titlePage mt80'>Web API Documentation</h1>
          <p>
            Note: By using Musicoin Endpoints, you automatically accept the Musicoin Terms of Service.
          </p>
          <img src='/img/webapi/webapi_intro.png' alt='Musicoin WebAPI image' className='responsive' />
          <p>
            There are various endpoints that can be used to fetch data about artists, musicians and playlsits. Transaction log can alos be fetched using the Musicoin API. Access is rate limited according to the API plan you have purchased.
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
            <h3>User Related Endpoints</h3>
<ul>
<li>
<Highlight className='console'>
{`POST /auth/signup
Endpoint: https://api.musicoin.org/auth/signup`}
</Highlight>
<Highlight className='console'>
{`curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'username=varunram1&email=varunramganesh@gmail.com&password=123456789' "http://35.232.77.81:3000/auth/signup"

Response:
{
  "success": true,
  "publicKey": "5b769d9a2088882e67d1c765"
}
`}
</Highlight>
</li>
<li>
<Highlight className='console'>
  {`POST /auth/credentials
Endpoint: http://35.232.77.81:3000/auth/credentials"`}
</Highlight>
<Highlight className='console'>
{`curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'email=varunramganesh@gmail.com&password=123456789' "http://35.232.77.81:3000/auth/credentials"

Response:
{
  "success": true,
  "apiuser": {
    "_id": "5b76a19e2088882e67d1c768",
    "clientId": "5b76a19e2088882e67d1c767",
    "clientSecret": "bpbGaiLjpbKwYw737nHFrGh6f7XWpt",
    "__v": 0,
    "balance": 0,
    "calls": 0,
    "limitApiCalls": 1000
  }
}
`}
</Highlight>
</li>
<li>
<Highlight className='console'>
  {`POST /user/delete
Endpoint: http://35.232.77.81:3000/user/delete?clientId=5b769d9a2088882e67d1c765&clientSecret=Q8kuUcJZgugIQOm8mjyCkfHaddCfpV`}
</Highlight>
<Highlight className='console'>
{`curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'email=varunramganesh@gmail.com&password=123456789' "http://35.232.77.81:3000/user/delete?clientId=5b769d9a2088882e67d1c765&clientSecret=Q8kuUcJZgugIQOm8mjyCkfHaddCfpV"

Response:
{
  "token": "7LUFf34slskv8Acy2cVUdTfBzsb6C4225L5PdA8A9NGgAX4gKiv7ViRI5w2CSob9pfqtfbV1UjBuQ4Wo"
}
`}
</Highlight>
</li>
<li>
<Highlight className='console'>
  {`GET /user/delete/verify
Endpoint: http://35.232.77.81:3000/user/delete/verify/7LUFf34slskv8Acy2cVUdTfBzsb6C4225L5PdA8A9NGgAX4gKiv7ViRI5w2CSob9pfqtfbV1UjBuQ4Wo?clientId=5b769d9a2088882e67d1c765&clientSecret=Q8kuUcJZgugIQOm8mjyCkfHaddCfpV"`}
</Highlight>
<Highlight className='console'>
{`curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/user/delete/verify/7LUFf34slskv8Acy2cVUdTfBzsb6C4225L5PdA8A9NGgAX4gKiv7ViRI5w2CSob9pfqtfbV1UjBuQ4Wo?clientId=5b769d9a2088882e67d1c765&clientSecret=Q8kuUcJZgugIQOm8mjyCkfHaddCfpV"

Response:
{
  "success": true
}
`}
</Highlight>
</li>
<li>
<Highlight className='console'>
  {`DELETE /user/delete
Endpoint: http://35.232.77.81:3000/user/delete?clientId=5b769d9a2088882e67d1c765&clientSecret=Q8kuUcJZgugIQOm8mjyCkfHaddCfpV`}
</Highlight>
<Highlight className='console'>
{`curl -X DELETE -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'email=varunramganesh@gmail.com&password=123456789' "http://35.232.77.81:3000/user/delete?clientId=5b769d9a2088882e67d1c765&clientSecret=Q8kuUcJZgugIQOm8mjyCkfHaddCfpV"

Response:
{
  "success": true,
  "message": "User account was successfully deleted"
}
`}
</Highlight>
</li>
<li>
<Highlight className='console'>
  {`GET /user/ismember
Endpoint: http://35.232.77.81:3000/user/ismember/5b76a19e2088882e67d1c767?clientId=5b76a19e2088882e67d1c767&clientSecret=bpbGaiLjpbKwYw737nHFrGh6f7XWpt`}
</Highlight>
<Highlight className='console'>
{`curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/user/ismember/5b76a19e2088882e67d1c767?clientId=5b76a19e2088882e67d1c767&clientSecret=bpbGaiLjpbKwYw737nHFrGh6f7XWpt"

Response:
{
  "success": true,
  "daysRemaning": 0,
  "membershipLevel": 1
}
`}
</Highlight>
</li>
<li>
<Highlight className='console'>
  {`GET /user/info
Endpoint: http://35.232.77.81:3000/user/info/5b76a19e2088882e67d1c767?clientId=5b76a19e2088882e67d1c767&clientSecret=bpbGaiLjpbKwYw737nHFrGh6f7XWpt`}
</Highlight>
<Highlight className='console'>
{`curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/user/info/5b76a19e2088882e67d1c767?clientId=5b76a19e2088882e67d1c767&clientSecret=bpbGaiLjpbKwYw737nHFrGh6f7XWpt"

Response:
{
  "createdBy": "0xf527a9a52b77f6c04471914ad57c31a8ae104d71",
  "artistName": "",
  "contractVersion": "v0.3",
  "imageUrl": "",
  "followers": 0,
  "socialUrl": "",
  "tipCount": 0,
  "balance": 0,
  "forwardingAddress": "0x0",
  "descriptionUrl": "",
  "prettyUrl": "",
  "membershipLevel": 1
}
`}
</Highlight>
</li>
// Use below template for other endpoints
<li>
<Highlight className='console'>
  {`POST /auth/signup
Endpoint: https://api.musicoin.org/auth/signup`}
</Highlight>
<Highlight className='console'>
{`curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'username=varunram1&email=varunramganesh@gmail.com&password=123456789' "http://35.232.77.81:3000/auth/signup"

Response:
{
  "success": true,
  "publicKey": "5b769d9a2088882e67d1c765"
}
`}
</Highlight>
</li>
</ul>
          </div>
        </Container>
      </div>

    )
  }
}

export { DocsPage }
