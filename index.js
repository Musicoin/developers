const express = require('express')
const path = require('path')
const port = 5000 // nginx proxy
const app = express()

// serve static assets normally
// app.use(express.static(__dirname + '/public'))
app.use(express.static(path.join(__dirname, 'public')))

// Handles all routes so you do not get a not found error
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log('server started on port ' + port)
