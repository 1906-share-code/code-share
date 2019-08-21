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

    this.editor = React.createRef()
    this.doc = false

    this.options = {
      mode: 'javascript',
      lineNumbers: true
    }
  }

  componentDidMount() {
    const str = window.location.protocol === 'https:' ? 'wss://' : 'ws://'
    const socket = new WebSocket(str + window.location.host)

    let connection = new sharedb.Connection(socket)
    this.doc = connection.get('demo', 'inputbox')

    this.doc.subscribe(err => {
      if (err) throw err
      console.log('subscribe ran')

      if (this.doc.type === null) {
        this.doc.create('', 'text', {}, error => {
          if (!error) {
            this.editor.current.editor.setValue(this.doc.data)
          }
        })
      } else {
        this.editor.current.editor.setValue(this.doc.data)
      }
      this.doc.on('op', () => {
        console.log('stuff happened')
      })
    })
  }

  render() {
    let main = (
      <div>
        <UnControlled
          ref={this.editor}
          options={this.options}
          onChange={(editor, change, value) => {
            if (change.origin !== 'setValue') {
              let op = transformCodeMirrorChange(editor, change)
              console.log('some sort of string that says op', op)
              //console.log(change)
              this.doc.submitOp(op, {}, () => {
                //console.log(JSON.stringify(this.doc.data))
              })
            }
          }}
        />
      </div>
    )
    let loading = <div>Waiting</div>
    return this.editor ? main : loading
  }
}
