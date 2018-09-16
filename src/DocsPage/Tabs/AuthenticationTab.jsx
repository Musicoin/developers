import React, {Component} from 'react'
import Highlight from 'react-highlight'

class AuthenticationTab extends Component {
  render () {
    return (
      <div>
        <h3 className='light'>Authentication Related Endpoints</h3>
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
                  <td>POST</td>
                  <td> <span className='green'>/signup</span> </td>
                  <td>Creates a new user on the musicoin platform</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'email=john@musicoin.org&password=12345&username=johndoe' "http://35.232.77.81:3000/signup"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'POST',
  url: 'http://35.232.77.81:3000/signup',
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form:
   { email: 'john@musicoin.org',
     password: '12345',
     username: 'johndoe' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
`}
</Highlight>
<Highlight className='console'>
{`Response:
{
  "success": true,
  "publicKey": "5b9df730444fb807b1d8723a"
}`}
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
{`$ curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'email=johndoe@musicoin.org&password=123456&username=john' "http://35.232.77.81:3000/credentials"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'POST',
  url: 'http://35.232.77.81:3000/credentials',
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form:
   { email: 'johndoe@musicoin.org',
     password: '123456',
     username: 'john' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
`}
</Highlight>
<Highlight className='console'>
{`Response:
{
  "success": true,
  "apiuser": {
    "clientId": "5b9df878444fb807b1d87240",
    "clientSecret": "N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
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
                  <td>Checks for the right credentials</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'email=johndoe@musicoin.org&password=123456&username=john' "http://35.232.77.81:3000/authenticate"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'POST',
  url: 'http://35.232.77.81:3000/authenticate',
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form:
   { email: 'johndoe@musicoin.org',
     password: '123456',
     username: 'john' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
`}
</Highlight>
<Highlight className='console'>
{`Response:
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
