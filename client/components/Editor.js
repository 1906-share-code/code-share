import React from 'react'
import {UnControlled} from 'react-codemirror2'
import {transformCodeMirrorChange} from '../javascriptstuff/otoffsetfuncs'
import connection from '../connect'
import {operationsfunc} from '../javascriptstuff/operationsfunc'

require('codemirror/mode/javascript/javascript')

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
    //this.doc = connection.get('demo', 'inputbox')
    this.doc = connection.get(
      this.props.match.params.user,
      this.props.match.params.name
    )
    console.log(this.doc.collection)
    console.log(this.doc.id)

    this.doc.subscribe(err => {
      if (err) throw err

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
        operationsfunc(op, local, this.editor.current.editor)
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
              this.doc.submitOp(op, {}, err => {
                console.log('submit op error', err)
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
