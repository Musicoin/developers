import React, {Component} from 'react'
import Highlight from 'react-highlight'

class PlaylistTab extends Component {
  render () {
    return (
      <div>
        <h3 className='light'>Playlist Related Endpoints</h3>
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
                  <td> <span className='green'>/user/playlist</span> </td>
                  <td>Create a new playlist, you need to pass a reaw JSON object to create the playlist.</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$
  curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d '{
	"name": "john'"'"'s playlist",
    "user": {
        "email":"johndoe@musicoin.org",
        "password": "123456"
    },
    "songs": ["0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f", "0x7f8b75484bbd857c72dab1574181051cea091923"]
}' "http://35.232.77.81:3000/user/playlist?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'POST',
  url: 'http://35.232.77.81:3000/user/playlist',
  qs:
   { clientId: '5b9df878444fb807b1d87240',
     clientSecret: 'N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx' },
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/json' } };

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
  "playlistName": "john's playlist",
  "playlistUrl": "http://musicoin.org/playlist/john's playlist",
  "creatorName": "john",
  "creatorUrl": "http://musicoin.org/artist/nav/undefined"
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
                  <td> <span className='green'>/user/playlist</span> </td>
                  <td>Get the details of a playlist</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X GET -H "Content-Type: application/json" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/user/playlist/john's%20playlist?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/user/playlist/john%27s%2520playlist',
  qs:
   { clientId: '5b9df878444fb807b1d87240',
     clientSecret: 'N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx' },
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/json' } };

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
  "playlistName": "john's playlist",
  "playlistUrl": "http://musicoin.org/playlist/john's playlist",
  "creatorName": "john",
  "creatorUrl": null,
  "songs": [
    "0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f",
    "0x7f8b75484bbd857c72dab1574181051cea091923"
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
                  <td>DELETE</td>
                  <td> <span className='green'>/user/playlist</span> </td>
                  <td>A template for new routes</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X DELETE -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'email=johndoe@musicoin.org&password=123456&username=john' "http://35.232.77.81:3000/user/playlist/john's%20playlist?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'DELETE',
  url: 'http://35.232.77.81:3000/user/playlist/john%27s%2520playlist',
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
  "playlistName": "john's playlist",
  "playlistUrl": "http://musicoin.org/playlist/john's playlist",
  "creatorName": "john",
  "creatorUrl": "http://musicoin.org/artist/nav/undefined"
}
`}
</Highlight>
          </li>

        </ul>
      </div>
    )
  }
}

export default PlaylistTab
