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
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/user/usage/stats?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/user/usage/stats',
  qs:
   { clientId: '5b9df878444fb807b1d87240',
     clientSecret: 'N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx' },
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
  "tie": "Free",
  "calls": 24
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
{`$ curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'email=johndoe@musicoin.org&password=123456&username=john' "http://35.232.77.81:3000/user/delete?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'POST',
  url: 'http://35.232.77.81:3000/user/delete',
  qs:
   { clientId: '5b9df878444fb807b1d87240',
     clientSecret: 'N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx' },
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
  "token": "jj5wJyjydYGXkcakVWAX2W7bAxUmwoRXk7yaZ47CzHFKqhLXFyNzDtRkwgx8ki3Lf8IFusRG2Ly3oxyq"
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
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/user/delete/verify/03tzcxWVzjSR9ClgOVyvfYDfG9LxiHsIcaaFRIca7Zo8mJkJgjnFU93aDfaiwk669SxY7QQoS75SOI0z?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/user/delete/verify/FfLK1Kby9DD7pk0m81tJ6J4XQCEbciLr7A8bqwkQnWTBn0H4fcsbBlkFUK33oOStVt7Y9fOYobflHNJm',
  qs:
   { clientId: '5b9df878444fb807b1d87240',
     clientSecret: 'N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx' },
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
{`$ curl -X DELETE -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'email=your@email.com&password=123456blah&username=blah' "http://35.232.77.81:3000/user/delete?clientId=5b9e56485451a4513c0fc6fe&clientSecret=jSsHNQebWi98rorsqt2Hxdak0R0Dey"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'DELETE',
  url: 'http://35.232.77.81:3000/user/delete',
  qs:
   { clientId: '5b9e56485451a4513c0fc6fe',
     clientSecret: 'jSsHNQebWi98rorsqt2Hxdak0R0Dey' },
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form:
   { email: 'your@email.com',
     password: '123456',
     username: 'blah' } };

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
  "message": "Account was successfully deleted"
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
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/user/ismember?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/user/ismember',
  qs:
   { clientId: '5b9df878444fb807b1d87240',
     clientSecret: 'N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx' },
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form:
   { email: 'johndoe@musicoin.org',
     password: '123456',
     username: 'john' } };
a
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
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/user/info?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/user/info',
  qs:
   { clientId: '5b9df878444fb807b1d87240',
     clientSecret: 'N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx' },
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
  "createdBy": "0x6e1d33f195e7fadcc6da8ca9e36d6d4d717cf504",
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
                  <td> <span className='green'>/user/renew</span> </td>
                  <td>Renew Musicoin Membership</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'publicKey=0x2f56d753e4f10f2c88e95c5c147f4f2498beda17&txReceipt=0x17e09a88f35b585ad42882ff19b359def20b09556b62a98f0360f0b2bdf3d3ed' "http://35.232.77.81:3000/user/renew?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'POST',
  url: 'http://35.232.77.81:3000/user/renew',
  qs:
   { clientId: '5b9df878444fb807b1d87240',
     clientSecret: 'N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx' },
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form:
   { publicKey: '0x2f56d753e4f10f2c88e95c5c147f4f2498beda17',
     txReceipt: '0x17e09a88f35b585ad42882ff19b359def20b09556b62a98f0360f0b2bdf3d3ed' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
`}
</Highlight>
<Highlight className='console'>
{`Response:
{
  "success": false
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
                  <td> <span className='green'>/package/list</span> </td>
                  <td>Get the various Musicoin API packages available</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/package/list?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/package/list',
  qs:
   { clientId: '5b9df878444fb807b1d87240',
     clientSecret: 'N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx' },
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
  "data": [
    {
      "_id": "5b7e9fd4bfb61a4767b282c5",
      "name": "Free",
      "__v": 0,
      "limitApiCalls": 500
    },
    {
      "_id": "5b7e9fe0bfb61a4767b282c6",
      "name": "Developer",
      "__v": 0,
      "limitApiCalls": 10000
    },
    {
      "_id": "5b7e9ff1bfb61a4767b282c7",
      "name": "Entrprise",
      "__v": 0,
      "limitApiCalls": 100000
    },
    {
      "_id": "5b9ca1a9b60dbd78d9e97b6c",
      "name": "test",
      "__v": 0,
      "limitApiCalls": 10
    },
    {
      "_id": "5b9ca1d1b60dbd78d9e97b6e",
      "name": "test1",
      "__v": 0,
      "limitApiCalls": 10
    }
  ]
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
                  <td> <span className='green'>/package/create</span> </td>
                  <td>Create a new API tier</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'name=musicoin&limitApiCalls=11' "http://35.232.77.81:3000/package/create?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'POST',
  url: 'http://35.232.77.81:3000/package/create',
  qs:
   { clientId: '5b9df878444fb807b1d87240',
     clientSecret: 'N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx' },
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form: { name: 'musicoin', limitApiCalls: '11' } };

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
  "data": {
    "__v": 0,
    "name": "musicoin",
    "_id": "5b9e3074ab1192400e42e989",
    "limitApiCalls": 11
  }
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
