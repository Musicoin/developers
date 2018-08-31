import React, {Component} from 'react'
import Highlight from 'react-highlight'

class ArtistTab extends Component {
  render () {
    return (
      <div>
        <h3 className='light'>Artist Related Endpoints</h3>
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
                  <td> <span className='green'>/artist/isartist</span> </td>
                  <td>Return whether an artist is verified or not</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X GET "http://35.232.77.81:3000/artist/isartist/0xb1a1ca710934e70e56848328a1ee75e0754c2664?clientId=5b7f94e7dcb73452b7c582c1&clientSecret=iOWSTmgrCtulcjwue2eF7aZjvlZVUj"


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
                  <td>GET</td>
                  <td> <span className='green'>/artist/info</span> </td>
                  <td>Get publicly available information of an artist</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X GET "http://35.232.77.81:3000/artist/info/0xb1a1ca710934e70e56848328a1ee75e0754c2664?clientId=5b7f94e7dcb73452b7c582c1&clientSecret=iOWSTmgrCtulcjwue2eF7aZjvlZVUj"


Response:
{
  "totalTips": 1274,
  "totalReleases": 15,
  "totalPlays": 5517
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
                  <td> <span className='green'>/artist/totaltips</span> </td>
                  <td>Get the total number of tips an artist has received so far</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X GET  "http://35.232.77.81:3000/artist/totaltips/0xb1a1ca710934e70e56848328a1ee75e0754c2664?clientId=5b7f94e7dcb73452b7c582c1&clientSecret=iOWSTmgrCtulcjwue2eF7aZjvlZVUj"


Response:
{
  "success": true,
  "tipCount": 1274
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
                  <td> <span className='green'>/artist/totalplays</span> </td>
                  <td>Get the total number of times an artist's song has been played</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X GET  "http://35.232.77.81:3000/artist/totalplays/0xb1a1ca710934e70e56848328a1ee75e0754c2664?clientId=5b7f94e7dcb73452b7c582c1&clientSecret=iOWSTmgrCtulcjwue2eF7aZjvlZVUj"

Response:
{
  "success": true,
  "playsCount": 5517
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
                  <td> <span className='green'>/artist/earnings</span> </td>
                  <td>Get the total earnings (tipCount + playCount) of an artist</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X GET  "http://35.232.77.81:3000/artist/earnings/0xb1a1ca710934e70e56848328a1ee75e0754c2664?clientId=5b7f94e7dcb73452b7c582c1&clientSecret=iOWSTmgrCtulcjwue2eF7aZjvlZVUj"

Response:
{
  "success": true,
  "tipCount": 1274,
  "playCount": 5517,
  "earned": 6791
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
                  <td> <span className='green'>/artist/ofweek</span> </td>
                  <td>Get the artist of the week</td>
                </tr>
              </tbody>
            </table>
            <Highlight className='console'>
              {`$ curl -X GET "http://35.232.77.81:3000/artist/ofweek?clientId=5b7f94e7dcb73452b7c582c1&clientSecret=iOWSTmgrCtulcjwue2eF7aZjvlZVUj&limit=1"

Response:
{
  "success": true,
  "data": [
    {
      "artistName": "danp",
      "artistAddress": "http://musicoin.org/nav/artist/0xc4c750a6d4676e27b5d4c78a1b3172a543021fe1"
    }
  ]
}
`}
            </Highlight>
          </li>
        </ul>
      </div>
    )
  }
}

export default ArtistTab
