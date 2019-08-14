//Right now this is just notes delete this later

// const http = require('http') differnt
// const connet = require('connect') different
// const express = require('express')
// const serveStatic = require('serve-static') I think we have webpack for this sort of thing

// const ShareDB = require('sharedb')
// const ShareDBMingoMemory = require('sharedb-mingo-memory')
// const WebSocket = require('ws') same
// const WebSocketJSONStream = require('@teamwork/websocket-json-stream') same

// // http stores cookies module use sessions for this instead?
// //websocket client and server implementation for node but we already have a server
// //  io in socket file under index.js figure this out in a minute
// //websocket connection on the server with json encoded string

// let backend = new ShareDB()
// let share = new ShareDB() const objectPassedIn = {db: new ShareDBMingoMemory()}

//it looks like new ShareDB() takes and object that contains db and callback so far

// createDoc(startServer)

// //Create initial document then fire callback
// function createDoc(callback) {
//   let connection = backend.connect() //connect to existing server instead?
//   let doc = connection.get('examples', 'counter')
//   doc.fetch(function(err) {
//     if (err) throw err
//     if (doc.type === null) {
//       doc.create({numClicks: 0}, callback)
//       return
//     }
//     callback()
//   })
// }

// function startServer() {
//   //create a web server to serve files and listen to websocket connectionss
//   //We already have this
//   let app = express()     similar ln 55
//   app.use(express.static('static')) similar ln 56
//   let server = http.createServer(app)  //similar to kb 57

//   //Connect any incoming WebSocket connection to ShareDb
//   let wss = new WebSocket.Server({server: server}) like line 58
//   wss.on('connection', function(ws) {  //similar to 62
//     let stream = new WebSocketJSONStream(ws)
//     backend.listen(stream)
//   })
//   server.listen(8080) //like line 59
//   console.log('listening on http://localhost:8080')
// }

//create a websocket server lns 40 42
// let app = connect()
// app.use(serveStatic('.'))
// let server = http.createServer(app)
// let wss = new WebSocket.Server( { server: server}) //like ln 45
// server.listen(8080) //like ln 50

// //connect any incoming websoket connection with ShareDb
// wss.on('connection', function(ws){ //similar to 46
//     var stream = new WebSocketJSONStream(ws);
//     share.listen(stream);
// })

//Create initial documents
// Create initial documents
// var connection = share.connect()
// connection.createFetchQuery('players', {}, {}, function(err, results) {
//   if (err) {
//     throw err
//   }

//   if (results.length === 0) {
//     var names = [
//       'Ada Lovelace',
//       'Grace Hopper',
//       'Marie Curie',
//       'Carl Friedrich Gauss',
//       'Nikola Tesla',
//       'Claude Shannon'
//     ]

//     names.forEach(function(name, index) {
//       var doc = connection.get('players', '' + index)
//       var data = {name: name, score: Math.floor(Math.random() * 10) * 5}
//       doc.create(data)
//     })
//   }
// })
