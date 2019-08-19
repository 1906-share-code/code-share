import React from 'React'
import {Controlled} from 'react-codemirror2'

require('codemirror/mode/javascript/javascript')
var sharedb = require('sharedb/lib/client')
//import StringBinding from 'sharedb-string-binding'

export class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.codebox = React.createRef()

    this.options = {
      mode: 'javascript',
      lineNumbers: true
    }
    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    let input = this.codebox.current
    const str = window.location.protocol === 'https:' ? 'wss://' : 'ws://'
    const socket = new WebSocket(str + window.location.host)

    let connection = new sharedb.Connection(socket)
    let doc = connection.get('demo', 'inputbox')

    doc.subscribe(function(err) {
      if (err) throw err
      console.log('before ', doc.type)
      if (doc.type === null) {
        console.log('I am running ', doc.type)
        doc.create({content: ''})
      }
      console.log('after', doc.type)
      //let binding = new StringBinding(input, doc, ['content'])
      //binding.setup()
    })
  }

  render() {
    console.log(this.state)
    let main = (
      <Controlled
        ref={this.codebox}
        type="text"
        value={this.state.value}
        options={this.options}
        onBeforeChange={(editor, data, value) => {
          this.setState({value})
        }}
        onChange={(editor, data, value) => {}}
      />
    )

    return main
  }
}
