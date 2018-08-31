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
                  <td>Create a new playlist</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X POST -H "Content-Type: application/json" -d '{
    "name": "TESTPLAYSL",
    "user": {
        "email":"varunramganesh@gmail.com",
        "password": "123456789"
    },
    "songs": ["0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f", "0x7f8b75484bbd857c72dab1574181051cea091923"]
}' "http://35.232.77.81:3000/user/playlist?clientId=5b7f94e7dcb73452b7c582c1&clientSecret=iOWSTmgrCtulcjwue2eF7aZjvlZVUj&limit=1"

Response:
{
  "success": true,
  "playlistName": "TESTPLAYSL",
  "playlistUrl": "http://musicoin.org/playlist/TESTPLAYSL",
  "creatorName": "varunram",
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
              {`$ curl -X GET -H "Content-Type: application/json" "http://35.232.77.81:3000/user/playlist/TESTPLAYSL?clientId=5b7f94e7dcb73452b7c582c1&clientSecret=iOWSTmgrCtulcjwue2eF7aZjvlZVUj&limit=1"

Response:
{
  "success": true,
  "playlistName": "TESTPLAYSL",
  "playlistUrl": "http://musicoin.org/playlist/TESTPLAYSL",
  "creatorName": "varunram",
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
                  <td>DELETE</td>
                  <td> <span className='green'>/user/playlist</span> </td>
                  <td>A template for new routes</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X DELETE -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" -d 'username=varunram&password=123456789' "http://35.232.77.81:3000/user/playlist/TESTPLAYSL?clientId=5b7f94e7dcb73452b7c582c1&clientSecret=iOWSTmgrCtulcjwue2eF7aZjvlZVUj&limit=1"

Response:
{
  "success": true,
  "playlistName": "TESTPLAYSL",
  "playlistUrl": "http://musicoin.org/playlist/TESTPLAYSL",
  "creatorName": "varunram",
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
                  <td> <span className='green'>/blah/template</span> </td>
                  <td>A template for new routes</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" ""

Response:
`}
            </Highlight>
          </li>

        </ul>
      </div>
    )
  }
}

export default PlaylistTab
