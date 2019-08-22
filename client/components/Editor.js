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
      this.doc.on('op', (op, local) => {
        console.log('we are in this.doc.on function')
        if (!local) {
          console.log(op)
          //then we want to translate op back into javascript stuff
          //let lineAndCharactor = this.editor.current.editor.posFromIndex(op[0])

          let cursor = 0
          op.forEach(item => {
            //if its insert or string or delete move cursor approate
            //we need to do the operation duh

            if (typeof item === 'number') {
              cursor += item
            } else if (typeof item === 'string') {
              let lineAndCharactor = this.editor.current.editor.posFromIndex(
                cursor
              )
              this.editor.current.editor.replaceRange(
                item,
                lineAndCharactor,
                undefined,
                'server'
              )
              cursor += item.length
            } else if (typeof item === 'object') {
              console.log('object')
            } else {
              console.log('made it to esle')
            }
          })
        }
        console.log('end of func')
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
            if (change.origin !== 'setValue' && change.origin !== 'server') {
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
