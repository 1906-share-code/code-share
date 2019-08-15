// import io from 'socket.io-client'

//import WebSocket from 'ws';
var sharedb = require('sharedb/lib/client')

// const socket = io(window.location.origin)

// socket.on('connect', () => {
//   console.log('Connected!')
// })

const socket = new WebSocket('ws://' + window.location.host)
let connection = new sharedb.Connection(socket)

export default connection
//export default socket
