import {type} from 'ot-text'
import ReconnectingWebSocket from 'reconnecting-websocket'
let sharedb = require('sharedb/lib/client')
sharedb.types.register(type)
const str = window.location.protocol === 'https:' ? 'wss://' : 'ws://'
const socket = new ReconnectingWebSocket(str + window.location.host)
let connection = new sharedb.Connection(socket)

export default connection
