import React from 'React'
import {UnControlled} from 'react-codemirror2'
import {type} from 'ot-text'
import {
  changeHandlers,
  handleInputChange
} from '../javascriptstuff/otoffsetfuncs'

require('codemirror/mode/javascript/javascript')
let sharedb = require('sharedb/lib/client')
sharedb.types.register(type)

export class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.codebox = React.createRef()

    this.options = {
      mode: 'javascript',
      lineNumbers: true
    }
    //this.myCallback = this.bind.myCallback(this)
  }

  // myCallback() {
  //   //what
  // }

  componentDidMount() {
    let input = this.codebox.current
    const str = window.location.protocol === 'https:' ? 'wss://' : 'ws://'
    const socket = new WebSocket(str + window.location.host)

    let connection = new sharedb.Connection(socket)
    let doc = connection.get('demo', 'inputbox')

    doc.subscribe(function(err) {
      if (err) throw err
      if (doc.type === null) {
        // doc.create('ABCDEFG', 'text', {}, () => {
        //   doc.submitOp([1, ' hi ', 2, {d: 3}, 1, 'hello'], {}, () => {
        //     //console.log(doc)
        //   })
        // })
        doc.create('', 'text', {}, () => {
          // doc.submitOp(handleInputChange(), {}, () => {
          //   console.log(doc)
          // })
        })
      }
      //we need to bind somehow
    })
  }

  render() {
    console.log(this.state)
    let main = (
      <UnControlled
        ref={this.codebox}
        options={this.options}
        onChange={(editor, change, value) => {
          handleInputChange(change, value)
        }}
      />
    )

    return main
  }
}
