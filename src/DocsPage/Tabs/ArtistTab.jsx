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
  {`$ curl -X GET "http://35.232.77.81:3000/artist/isartist/0xb1a1ca710934e70e56848328a1ee75e0754c2664?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
  `}
  </Highlight>
  <Highlight className='javascript'>
  {`// Javascript
    var request = require("request");

    var options = { method: 'GET',
      url: 'http://35.232.77.81:3000/artist/isartist/0xb1a1ca710934e70e56848328a1ee75e0754c2664',
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
                  <td>GET</td>
                  <td> <span className='green'>/artist/about</span> </td>
                  <td>Get publicly available information of an artist</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/artist/about/0xb1a1ca710934e70e56848328a1ee75e0754c2664?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
  var request = require("request");

  var options = { method: 'GET',
    url: 'http://35.232.77.81:3000/artist/about/0xb1a1ca710934e70e56848328a1ee75e0754c2664',
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
    "totalTrackTips": 274,
    "totalReleases": 10,
    "totalPlays": 1253
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
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/artist/totaltips/0xb1a1ca710934e70e56848328a1ee75e0754c2664?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
  var request = require("request");

  var options = { method: 'GET',
    url: 'http://35.232.77.81:3000/artist/totaltips/0xb1a1ca710934e70e56848328a1ee75e0754c2664',
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
{`
  Response:
  {
    "success": true,
    "tipCount": 274
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
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/artist/totalplays/0xb1a1ca710934e70e56848328a1ee75e0754c2664?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
  var request = require("request");

  var options = { method: 'GET',
    url: 'http://35.232.77.81:3000/artist/totalplays/0xb1a1ca710934e70e56848328a1ee75e0754c2664',
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
{`
Response:
{
  "success": true,
  "playsCount": 1253
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
{`$curl -X GET  "http://35.232.77.81:3000/artist/earnings/0xb1a1ca710934e70e56848328a1ee75e0754c2664?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
  var request = require("request");

  var options = { method: 'GET',
    url: 'http://35.232.77.81:3000/artist/earnings/0xb1a1ca710934e70e56848328a1ee75e0754c2664',
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
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/artist/ofweek?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx&limit=1"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
  var request = require("request");

  var options = { method: 'GET',
    url: 'http://35.232.77.81:3000/artist/ofweek',
    qs:
     { clientId: '5b9df878444fb807b1d87240',
       clientSecret: 'N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx',
       limit: '1' },
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
{`
Response:
{
  "success": true,
  "data": [
    {
      "artistName": "Test",
      "artistAddress": "http://musicoin.org/nav/artist/0x2f56d753e4f10f2c88e95c5c147f4f2498beda17"
    },
    {
      "artistName": "danp",
      "artistAddress": "http://musicoin.org/nav/artist/0xc4c750a6d4676e27b5d4c78a1b3172a543021fe1"
    }
  ]
}`}
</Highlight>
          </li>
        </ul>
      </div>
    )
  }
}

export default ArtistTab
