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
  <h3 className="light">Authentication Related Endpoints</h3>
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
  <h3 className="light">User Related Endpoints</h3>
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
  <h3 className="light">Release Related Endpoints</h3>
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
{`$ curl -X GET "http://localhost:3000/release/genres?clientId=5b7f94e7dcb73452b7c582c1&clientSecret=iOWSTmgrCtulcjwue2eF7aZjvlZVUj"

Response:

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
{`$ curl -X GET "http://35.232.77.81:3000/release/random?clientId=5b7f94e7dcb73452b7c582c1&clientSecret=iOWSTmgrCtulcjwue2eF7aZjvlZVUj"

Response:
{
  "success": true,
  "data": {
    "title": "Get Up On Min",
    "link": "https://musicion.org/nav/track/0x006b6b89bab636e1ec1cde85d7574af2f69aef10",
    "pppLink": "0x9b08c265945fe7d979fd7f372da9a98da00ca4ae0690353ac1b9790fa45a143c",
    "genres": [
      "Hip-hop & Rap"
    ],
    "author": "LilHayesTV",
    "authorLink": "https://musicoin.org/nav/artist/0xe5987a9dab0212b3bc0d02390a6df80abf1bd398",
    "trackImg": "ipfs://QmVsrwTyoePW4mAR13RkVckxF8bZEtH9iGwgqDVisQffsx",
    "trackDescription": "fire, share with all your friends on all your social media pages.",
    "directPlayCount": 16
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
{`$ curl -X GET "http://35.232.77.81:3000/release/random?genre=Rock&clientId=5b7f94e7dcb73452b7c582c1&clientSecret=iOWSTmgrCtulcjwue2eF7aZjvlZVUj"

Response:
{
  "success": true,
  "data": {
    "title": "Bird's eye view",
    "link": "https://musicion.org/nav/track/0x3a3e5f2d710da76c778fcf45e96b022cbb83c242",
    "pppLink": "0x924ff742f8dbfa165cc21f2ed3ddd1ec1da4dae717c792cad98dc62349987aab",
    "genres": [
      "Rock",
      "Alternative Rock",
      "Metal"
    ],
    "author": "Orestis Pad",
    "authorLink": "https://musicoin.org/nav/artist/0x4235b2d99ca25aa2512654c6cd9a2404552e7e94",
    "trackImg": "ipfs://QmPPtNxF7un7LTt5M8BC9KrmmvfCkxWnRpuCkxwFKxzD43",
    "trackDescription": "Live recording, no post editing.",
    "directPlayCount": 5
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
{`$ curl -X GET "http://35.232.77.81:3000/artist/new?clientId=5b7f94e7dcb73452b7c582c1&clientSecret=iOWSTmgrCtulcjwue2eF7aZjvlZVUj"


Response:
{
  "success": true,
  "data": [
    {
      "name": "RJCreation's",
      "joinDate": "2018-07-31T05:00:29.144Z",
      "profileLink": "https://musicoin.org/nav/artist/0x29f4c38dc490612124091c8a8c6e41b92e18fafa"
    },
    {
    "name": "Elo The Source",
    "joinDate": "2018-07-30T23:45:52.217Z",
    "profileLink": "https://musicoin.org/nav/artist/0xa8ed58095ad8221254701cba1f7305381ba691b2"
    },
    {
      "name": "David Ryan Harris",
      "joinDate": "2018-07-30T14:44:44.428Z",
      "profileLink": "https://musicoin.org/nav/artist/0xb00557cecceb33fa5fe24c8a47dbad561d53c785"
    },
    {
      "name": "Mokan",
      "joinDate": "2018-07-30T05:00:33.085Z",
      "profileLink": "https://musicoin.org/nav/artist/0x69c500e9b5dc760ac76de17996a39c462745ff27"
    },
    {
      "name": "The Candy Man",
      "joinDate": "2018-07-30T03:30:52.751Z",
      "profileLink": "https://musicoin.org/nav/artist/0xe85f539e21c08896295728aca4bca9d41c455e58"
    },
    {
      "name": "WALTER  SANTOS",
      "joinDate": "2018-07-28T23:43:00.099Z",
      "profileLink": "https://musicoin.org/nav/artist/0xad14b8d4aaa2334d97aec59ca76da5bd95485b1f"
    },
    {
      "name": "Stephan Coleur",
      "joinDate": "2018-07-28T20:59:31.137Z",
      "profileLink": "https://musicoin.org/nav/artist/0xb35dfeacf4dcd75e319ddde6952032c3bcdb0703"
    },
    {
      "name": "Claiton Lemes",
      "joinDate": "2018-07-28T14:30:25.210Z",
      "profileLink": "https://musicoin.org/nav/artist/0xfacb7aa1185804a3f2ecc1e1e672dff7c91d2345"
    },
    {
      "name": "Ravenking Einnarr",
      "joinDate": "2018-07-27T10:37:40.051Z",
      "profileLink": "https://musicoin.org/nav/artist/0xae0fa9683c6fc7958ad16a149ddd7751c5242feb"
    },
    {
      "name": "Rayvanhovenbeatz",
      "joinDate": "2018-07-26T17:06:13.151Z",
      "profileLink": "https://musicoin.org/nav/artist/0x3e64074133b90862fb8cceda860dffa2aa3b69f8"
    },
    {
      "name": "DOMosaurus_Rex",
      "joinDate": "2018-07-26T16:28:42.842Z",
      "profileLink": "https://musicoin.org/nav/artist/0x6bc245e3c8f15509a37e22d3aa4126391b386955"
    },
    {
      "name": "Lazzy Lung",
      "joinDate": "2018-07-26T16:14:48.527Z",
      "profileLink": "https://musicoin.org/nav/artist/0xfc72e50132ae95636710844de62a3d204870e7c8"
    },
    {
      "name": "Samuel Bauer",
      "joinDate": "2018-07-26T16:14:15.779Z",
      "profileLink": "https://musicoin.org/nav/artist/0x3a7936191490fb7394544bea3b7c1be41d8613c9"
    },
    {
      "name": "bitzone",
      "joinDate": "2018-07-26T15:09:40.169Z",
      "profileLink": "https://musicoin.org/nav/artist/0x882e602028bf5d0722a65691c9016c0d6f8047c2"
    },
    {
      "name": "Minibar(d)",
      "joinDate": "2018-07-26T09:24:10.426Z",
      "profileLink": "https://musicoin.org/nav/artist/0xef8963085f8e4146f48fb1d7b909c2b60a370eba"
    },
    {
      "name": "TERMITE",
      "joinDate": "2018-07-26T08:52:04.203Z",
      "profileLink": "https://musicoin.org/nav/artist/0x2d6f9b600c7983820151143f83a0f8a04e37da69"
    },
    {
      "name": "Niksmol",
      "joinDate": "2018-07-26T05:44:46.435Z",
      "profileLink": "https://musicoin.org/nav/artist/0xa3a3b62a95c185c99420d1bf600c9511bfc61b30"
    },
    {
      "name": "MemphisMessiah",
      "joinDate": "2018-07-24T10:46:58.152Z",
      "profileLink": "https://musicoin.org/nav/artist/0x15f124f03270e288ff897e410efacbe8e0896fc3"
    },
    {
      "name": "200 Trio",
      "joinDate": "2018-07-24T06:23:15.732Z",
      "profileLink": "https://musicoin.org/nav/artist/0x3d686159dc4ca9911446f47cad0df3a1053fa6ec"
    },
    {
      "name": "#ILove",
      "joinDate": "2018-07-23T08:14:42.624Z",
      "profileLink": "https://musicoin.org/nav/artist/0x41f6b8b919150c34462cb70c5206aa71454f18a6"
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
{`$ curl -X GET "http://35.232.77.81:3000/release/details/0x8c6cf658952d77c04de98c8a94c7b3b78d785b9f?clientId=5b7f94e7dcb73452b7c582c1&clientSecret=iOWSTmgrCtulcjwue2eF7aZjvlZVUj"

Response:
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
    "directTipCount": 57,
    "directPlayCount": 393
  }
}
`}
      </Highlight>
    </li>
  </ul>
  <h3 className="light">Artist Related Endpoints</h3>
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
  </Container>
</div>

    )
  }
}

export { DocsPage }
