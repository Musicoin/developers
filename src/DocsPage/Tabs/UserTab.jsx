import React, {Component} from 'react'
import Highlight from 'react-highlight'

class UserTab extends Component {
  render () {
    return (
      <div>
        <h3 className='light'>User Related Endpoints</h3>
        <ul>
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
                  <td>GET</td>
                  <td> <span className='green'>/user/stats</span> </td>
                  <td>Use this template</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X GET  "http://35.232.77.81:3000/user/stats?clientId=5b7f94e7dcb73452b7c582c1&clientSecret=iOWSTmgrCtulcjwue2eF7aZjvlZVUj"

Response:
{
  "tie": "Free",
  "calls": 45
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
                  <td> <span className='green'>/user/delete</span> </td>
                  <td>Endpoint to receive a token to delete a given user from the musicoin platform</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X POST -H "Content-Type: application/x-www-form-urlencoded"  -d 'email=varunramganesh@gmail.com&password=123456789' "http://35.232.77.81:3000/user/delete?clientId=5b769d9a2088882e67d1c765&clientSecret=Q8kuUcJZgugIQOm8mjyCkfHaddCfpV"

Response:
{
    "token": "7LUFf34slskv8Acy2cVUdTfBzsb6C4225L5PdA8A9NGgAX4gKiv7ViRI5w2CSob9pfqtfbV1UjBuQ4Wo"
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
                  <td>GET</td>
                  <td> <span className='green'>/user/delete/verify</span> </td>
                  <td>Verifies if the delete token passed is correct</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded"  "http://35.232.77.81:3000/user/delete/verify/7LUFf34slskv8Acy2cVUdTfBzsb6C4225L5PdA8A9NGgAX4gKiv7ViRI5w2CSob9pfqtfbV1UjBuQ4Wo?clientId=5b769d9a2088882e67d1c765&clientSecret=Q8kuUcJZgugIQOm8mjyCkfHaddCfpV"

Response:
{
  "success": true
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
                  <td>DELETE</td>
                  <td> <span className='green'>/user/delete</span> </td>
                  <td>Deletes the given user if the token provided matches with the one generate by the user</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X DELETE -H "Content-Type: application/x-www-form-urlencoded"  -d 'email=varunramganesh@gmail.com&password=123456789' "http://35.232.77.81:3000/user/delete?clientId=5b769d9a2088882e67d1c765&clientSecret=Q8kuUcJZgugIQOm8mjyCkfHaddCfpV"

Response:
{
  "success": true,
  "message": "User account was successfully deleted"
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
                  <td>GET</td>
                  <td> <span className='green'>/user/ismember</span> </td>
                  <td>Checks if a given user is a member of the muscoin platform and returns the membership level and days remaining</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded"  "http://35.232.77.81:3000/user/ismember/5b76a19e2088882e67d1c767?clientId=5b76a19e2088882e67d1c767&clientSecret=bpbGaiLjpbKwYw737nHFrGh6f7XWpt"

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
                  <td>GET</td>
                  <td> <span className='green'>/user/info</span> </td>
                  <td>Fetches publicly available information of the given user from the Musicoin platform</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded"  "http://35.232.77.81:3000/user/info/5b76a19e2088882e67d1c767?clientId=5b76a19e2088882e67d1c767&clientSecret=bpbGaiLjpbKwYw737nHFrGh6f7XWpt"

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
        </ul>
      </div>
    )
  }
}

export default UserTab
