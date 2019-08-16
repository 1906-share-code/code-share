import React from 'react'
//import connection from '../socket'

var sharedb = require('sharedb/lib/client')

import StringBinding from 'sharedb-string-binding'

export class InputBox extends React.Component {
  constructor(props) {
    super(props)

    this.inputbox = React.createRef()

    this.state = {
      inputValue: ''
    }

    //this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    let input = this.inputbox.current
    //const str = 'http:'
    const str = window.location.protocol === 'https:' ? 'wss://' : 'ws://'
    const socket = new WebSocket(str + window.location.host)

    let connection = new sharedb.Connection(socket)
    let doc = connection.get('demo', 'inputbox')
    doc.create({content: ''})
    console.log(doc)
    doc.subscribe(function(err) {
      if (err) throw err
      let binding = new StringBinding(input, doc, ['content'])
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
    let main = (
      <div>
        <h3>I exist to try and test if sharedb works</h3>
        <input
          type="text"
          // value={this.state.value}
          // onChange={this.handleChange}
          ref={this.inputbox}
        />
        {/* <p>{this.state.inputValue}</p> */}
      </div>
    )

    return main
  }
}
