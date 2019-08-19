import React from 'React'
import {Controlled} from 'react-codemirror2'

require('codemirror/mode/javascript/javascript')

export class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.options = {
      mode: 'javascript',
      lineNumbers: true
    }
    this.state = {
      value: ''
    }
  }

  render() {
    console.log(this.state)
    let main = (
      <Controlled
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
