import React, {Component} from 'react'
import Highlight from 'react-highlight'

class AuthenticationTab extends Component {
  render () {
    return (
      <div>
        <h3 className='light'>Authentication Related Endpoints</h3>
        <ul className='endPoints'>
          <li>
            <table className='endpoint-list mb20'>
              <thead>
                <tr>
                  <th>METHOD</th>
                  <th>ENDPOINT</th>
                  <th>USAGE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>POST</td>
                  <td> <span className='green'>/auth/signup</span> </td>
                  <td>Creates a new user on the musicoin platform</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X POST -H "Content-Type: application/x-www-form-urlencoded"  -d 'username=varunram1&email=varunramganesh@gmail.com&password=123456789' "http://35.232.77.81:3000/auth/signup"

Response:
{
  "success": true,
  "publicKey": "5b769d9a2088882e67d1c765"
}
`}
            </Highlight>
          </li>
          <li>
            <table className='endpoint-list mb20'>
              <thead>
                <tr>
                  <th>METHOD</th>
                  <th>ENDPOINT</th>
                  <th>USAGE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>POST</td>
                  <td> <span className='green'>/auth/credentials</span> </td>
                  <td>Get the Musicoin API credentials on the free tier</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X POST -H "Content-Type: application/x-www-form-urlencoded"  -d 'email=varunramganesh@gmail.com&password=123456789' "http://35.232.77.81:3000/auth/credentials"

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
            <table className='endpoint-list mb20'>
              <thead>
                <tr>
                  <th>METHOD</th>
                  <th>ENDPOINT</th>
                  <th>USAGE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>POST</td>
                  <td> <span className='green'>/authenticate</span> </td>
                  <td>Use this template</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X POST -H "Content-Type: application/x-www-form-urlencoded"  -d 'email=varunramganesh@gmail.com&password=123456789' "http://35.232.77.81:3000/authenticate"

Response:
{
  "success": true
}
`}
            </Highlight>
          </li>
        </ul>
      </div>
    )
  }
}

export default AuthenticationTab
