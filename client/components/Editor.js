import React from 'React'
import {UnControlled} from 'react-codemirror2'
import {type} from 'ot-text'
import {transformCodeMirrorChange} from '../javascriptstuff/otoffsetfuncs'

require('codemirror/mode/javascript/javascript')
let sharedb = require('sharedb/lib/client')
sharedb.types.register(type)

export class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.codebox = React.createRef()
    this.doc = false

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
    this.doc = connection.get('demo', 'inputbox')

    this.doc.subscribe(err => {
      if (err) throw err
      if (this.doc.type === null) {
        // doc.create('ABCDEFG', 'text', {}, () => {
        //   doc.submitOp([1, ' hi ', 2, {d: 3}, 1, 'hello'], {}, () => {
        //     //console.log(doc)
        //   })
        // })
        this.doc.create('', 'text', {}, () => {
          // doc.submitOp(handleInputChange(), {}, () => {
          //   console.log(doc)
          // })
        })
      } else {
        this.doc.del({}, () => {
          this.doc.create('', 'text')
        })
      }
      //we need to bind somehow
    })
  }

  render() {
    return (
      <div>
        {this.doc && (
          <UnControlled
            ref={this.codebox}
            options={this.options}
            onChange={(editor, change, value) => {
              let op = transformCodeMirrorChange(change, value)
              console.log(op)
              this.doc.submitOp(op, {}, () => {
                console.log(this.doc.data)
              })
            }}
          />
        )}
      </div>
    )
  }
}
