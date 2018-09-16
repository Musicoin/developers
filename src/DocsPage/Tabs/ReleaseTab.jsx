import React, {Component} from 'react'
import Highlight from 'react-highlight'

class UserTab extends Component {
  render () {
    return (
      <div>
        <h3 className='light'>Release Related Endpoints</h3>
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
                  <td> <span className='green'>/release/genres</span> </td>
                  <td>Get all genres defined on the Musicoin Platform</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/release/genres?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/release/genres',
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
[
  "Alternative Rock",
  "Ambient",
  "Classical",
  "Country",
  "Dance & EDM",
  "Dancehall",
  "Deep House",
  "Disco",
  "Drum & Bass",
  "Electronic",
  "Folk & Singer-Songwriter",
  "Hip-hop & Rap",
  "House",
  "Indie",
  "Jazz & Blues",
  "Latin",
  "Metal",
  "Piano",
  "Pop",
  "R&B & Soul",
  "Reggae",
  "Reggaeton",
  "Rock",
  "Soundtrack",
  "Techno",
  "Trance",
  "World",
  "Other"
]
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
                  <td> <span className='green'>/release/random</span> </td>
                  <td>Get a Random Release from the Musicoin Catalog</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/release/random?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/release/random',
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
  "data": {
    "title": "The Polish Ambassador - Rocket Heart ft. Katie Gray",
    "link": "https://musicion.org/nav/track/0x7e99067079db731662963453bd3e9c73f5edd914",
    "pppLink": "0x41118bcb832d9ad6b997d0491aa410d948918e73ff25791dfc32b9477241a408",
    "genres": [
      "Electronic",
      "Folk & Singer-Songwriter",
      "Hip-hop & Rap",
      "Latin",
      "Reggae"
    ],
    "author": "Jumpsuit Records",
    "authorLink": "https://musicoin.org/nav/artist/0x707749cbd75f5f950c4f5b603632d551c3ee81f2",
    "trackImg": "ipfs://QmYGb9Uxf8Gv8sDWqvv5BZog1snh7ij8Rs37oPnccYpQuC",
    "trackDescription": "Artist: The Polish Ambassador\r\nAlbum: Dreaming of an Old Tomorrow",
    "directTipCount": 101,
    "directPlayCount": 2
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
                  <td>GET</td>
                  <td> <span className='green'>/release/random?genre=blah</span> </td>
                  <td>Get a Random Release from a particular genre</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/release/random?genre=Rock&clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/release/random',
  qs:
   { genre: 'Rock',
     clientId: '5b9df878444fb807b1d87240',
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
  "data": {
    "title": "Ozan Gümrükçü - The Sides",
    "link": "https://musicion.org/nav/track/0x618c1558d180ef0dfec28a2188854a59e93ef99e",
    "pppLink": "0x1e04d78eba01e1e8613d596d8b9e2e1918390fbc77c0c6820879c6201bab2019",
    "genres": [
      "Rock",
      "Metal",
      "Ambient"
    ],
    "author": "Ozan Gümrükçü",
    "authorLink": "https://musicoin.org/nav/artist/0x1ef5af07524835de075d8678777e0c5466b5bd2a",
    "trackImg": "ipfs://QmWW3g9n8KkVGLweou883LMisxqPDsDBzCeTvyjUSYYYBp",
    "trackDescription": "Clean guitar oriented, a bit pshycedelic, a bit atmospheric, soundtrack-ish tune for your ears. Be calm and get calmer..",
    "directPlayCount": 4
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
                  <td>GET</td>
                  <td> <span className='green'>/artist/new</span> </td>
                  <td>Get a list of artists who have recently signed up on the Musicoin Platform</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/artist/new?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx&limit=1"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/artist/new',
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
{`Response:
{
  "success": true,
  "data": [
    {
      "name": "RJCreation's",
      "joinDate": "2018-07-31T05:00:29.144Z",
      "profileLink": "https://musicoin.org/nav/artist/0x29f4c38dc490612124091c8a8c6e41b92e18fafa"
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
                  <td>GET</td>
                  <td> <span className='green'>/release/details</span> </td>
                  <td>Get the details of a particular release</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/release/details/0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/release/details/0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f',
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
  "data": {
    "title": "Chasing for ICO",
    "link": "https://musicion.org/nav/track/0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f",
    "pppLink": "0xb0d926260d4dc5b65fdb0d6d5a1c36f139cb4f3f41e1add6167ecb0dbaa06635",
    "genres": [
      "Beats & Instrumentals"
    ],
    "author": "isaac",
    "authorLink": "https://musicoin.org/nav/artist/0xb1a1ca710934e70e56848328a1ee75e0754c2664",
    "trackImg": "ipfs://QmRDcdvjeXseuxcV7BPEoDt3bL4yxGZgK7VoDjJwgeAgvc",
    "trackDescription": "\"Give me money\"",
    "directTipCount": 61,
    "directPlayCount": 393
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
                  <td>GET</td>
                  <td> <span className='green'>/release/upvotes/trackid</span> </td>
                  <td>Get the number of upvotes a given song has</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/release/upvotes/0x8380864d3d725d36fd08b1d77c1733a736b0a486?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/release/upvotes/0x8380864d3d725d36fd08b1d77c1733a736b0a486',
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
  "message": "There are no votes of this track"
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
                  <td> <span className='green'>/release/plays/trackid</span> </td>
                  <td>Get the number of times a given release had been played</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/release/plays/0x8380864d3d725d36fd08b1d77c1733a736b0a486?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/release/plays/0x8380864d3d725d36fd08b1d77c1733a736b0a486',
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
  "plays": 269
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
                  <td> <span className='green'>/release/tips</span> </td>
                  <td>Get the number of tips a given song has received</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/release/tips/0x8380864d3d725d36fd08b1d77c1733a736b0a486?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/release/tips/0x8380864d3d725d36fd08b1d77c1733a736b0a486',
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
  "totalTips": 111
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
                  <td> <span className='green'>/release/bygenre</span> </td>
                  <td>Get releases by genre</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/release/bygenre?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx&genre=rock&limit=1"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/release/bygenre',
  qs:
   { clientId: '5b9df878444fb807b1d87240',
     clientSecret: 'N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx',
     genre: 'rock',
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
{`Response:
{
  "success": true,
  "data": [
    {
      "title": "Sir EU x DJ J-$crilla \"OPEN YER MOUTH\" ",
      "link": "https://musicion.org/nav/track/0x2050a3a70de07a3ab4d4cb24916235277e56e02f",
      "pppLink": "0xaedba7f9c9cc697bddcc9bd57190414ccb4951d094d5750252e0309251faaa9c",
      "genres": [
        "rap",
        "hip-hop",
        "rock",
        "Soundtrack"
      ],
      "author": "DJ J-Scrilla",
      "authorLink": "https://musicoin.org/nav/artist/0xadf9a6478c891d3cf5d0c8a15a3f8b025efee88d",
      "trackImg": "ipfs://QmSCcV5mogFHvgkLkf5dVGsUTiQVwLTBrRtFfCCwCofoHk",
      "directPlayCount": 75
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
                  <td>GET</td>
                  <td> <span className='green'>/release/top</span> </td>
                  <td>Get top releases ordered by number of tips</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/release/top?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx&genre=rock&limit=1"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/release/top',
  qs:
   { clientId: '5b9df878444fb807b1d87240',
     clientSecret: 'N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx',
     genre: 'rock',
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
{`Response:
{
  "success": true,
  "data": [
    {
      "title": "Woman Don't Cry ",
      "link": "https://musicion.org/nav/track/0x83730788de5b08c7c6993f9beca714f340216fcf",
      "pppLink": "0xfba8576b0831268feba6b790dc799f6adade1e5f452ca7cdd85971c20a86512b",
      "genres": [
        "R&B  raggae"
      ],
      "author": "Amaray ",
      "authorLink": "https://musicoin.org/nav/artist/0x0f8df2e0f5d302407e56e17b81051f03dc4767d4",
      "trackImg": "ipfs://QmQTAh1kwntnDUxf8kL3xPyUzpRFmD3GVoCKA4D37FK77C",
      "directTipCount": 139105,
      "directPlayCount": 2699
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
                  <td>GET</td>
                  <td> <span className='green'>/release/recent</span> </td>
                  <td>Get a list of new releases on the musicoin platform</td>
                </tr>
              </tbody>
            </table>
<Highlight className='console'>
{`$ curl -X GET -H "Content-Type: application/x-www-form-urlencoded" -H "Cache-Control: no-cache" "http://35.232.77.81:3000/release/recent?clientId=5b9df878444fb807b1d87240&clientSecret=N5e2IUb1GcvzXJ2Ot2VhoSaXQBj9Gx&limit=1"
`}
</Highlight>
<Highlight className='javascript'>
{`// Javascript
var request = require("request");

var options = { method: 'GET',
  url: 'http://35.232.77.81:3000/release/recent',
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
{`Response:
{
  "success": true,
  "data": [
    {
      "artistName": "Ryme",
      "artistProfile": "https://musicoin.org/nav/artist/0x3e612fcd22df8542dd3bd2d3f278ffea790a9aa9",
      "trackURL": "https://musicion.org/nav/track/0x4df1ea60df897ed2ce60edf89307e73c300f69f4"
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

export default UserTab
