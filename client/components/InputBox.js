import React from 'react'

//import connection from '../socket'
var CodeMirror = require('react-codemirror')

var sharedb = require('sharedb/lib/client')

import StringBinding from 'sharedb-string-binding'

export class InputBox extends React.Component {
  constructor(props) {
    super(props)

    this.inputbox = React.createRef()

    this.state = {
      inputValue: '',
      code: '//Code '
    }

    // this.handleChange = this.handleChange.bind(this)
  }

  updateCode(newCode) {
    this.setState({
      code: newCode
    })
  }

  componentDidMount() {
    let input = this.inputbox.current
    //const str = 'http:'
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
      let binding = new StringBinding(input, doc, ['content'])
      //let binding = new StringBinding(CodeMirror, doc, ['content'])
      binding.setup()
    })
  }

  // handleChange(event) {
  //   this.setState({
  //     //[event.target.name]: event.target.value
  //     inputValue: event.target.value
  //   })
  // }

  // handleSubmit(event) {
  //   event.preventDefault()
  // }

  render() {
    console.log(this.state)
    let options = {lineNumbers: true}
    let main = (
      <div>
        <h3>I exist to try and test if sharedb works</h3>
        <input
          type="text"
          // value={this.state.value}
          // onChange={this.handleChange}
          ref={this.inputbox}
        />
        <CodeMirror
          value={this.state.code}
          onChange={this.updateCode}
          options={options}
        />

        {/* <p>{this.state.inputValue}</p> */}
      </div>
    )

    return main
  }
}
