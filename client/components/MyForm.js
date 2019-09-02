import React, {Component} from 'react'
import {connect} from 'react-redux'
import connection from '../connect'
import {withRouter} from 'react-router-dom'
import {updateDocThunk} from '../store/doc'
import {Container, Form as AForm, TextArea, Button} from 'semantic-ui-react'

//Props has username availabe, so why dont we
//make a query to the database to check all documents
//with username and also
//make a thunk that posts new ones and routes to them here

export class MyForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      doc: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    //stuff
    console.log(connection)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('you clicked me')
    let userId = this.props.userId
    let docname = this.state.doc
    console.log(this.props)
    console.log(this.state)
    console.log(this.props.match)

    //this.props.postDoc(userId, docname)
    // this.props.history.push(`/products/${productId}`)
  }

  render() {
    let main = (
      <Container>
        <AForm onSubmit={this.handleSubmit}>
          <TextArea
            className=""
            id="doc"
            name="doc"
            type="text"
            onChange={this.handleChange}
            value={this.state.doc}
            placeholder="Document Name"
          />

          <AForm.Field
            id="form-button-control-public"
            control={Button}
            content="Submit"
            label=""
          />
        </AForm>
      </Container>
    )

    return main
  }
}

const mapDispatchToProps = dispatch => ({
  update: (userId, docname) => dispatch(updateDocThunk(userId, docname))
})

export default connect(null, mapDispatchToProps)(MyForm)
