import React from 'react'
import connection from '../connect'
import {withRouter} from 'react-router-dom'

export class Form extends React.Component {
  constructor(props) {
    super(props)

    this.goto = this.goto.bind(this)
  }

  componentDidMount() {
    //stuff
  }
  goto(event) {
    console.log(this.props.history)
    //console.log(process.env.NODE_ENV)
    //hardcoded link later do this better with routes and stuff :)
    //so that we have one user friendly link
    if (process.env.NODE_ENV === 'development') {
      this.props.history.push('/doc1')
    } else {
      this.props.history.push(
        'https://code-share-code.herokuapp.com/document/doc1'
      )
    }
  }

  render() {
    let main = <button onClick={this.goto}>Link to a demo document</button>

    return main
  }
}

export default withRouter(Form)
