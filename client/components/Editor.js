import React from 'React'
import {UnControlled} from 'react-codemirror2'

export class Editor extends React.Component {
  render() {
    console.log(this.state)
    let main = (
      <UnControlled
        value="console.log(&quot;hello Jon&quot;)"
        options={{
          mode: 'javascript',
          lineNumbers: true
        }}
      />
    )

    return main
  }
}
