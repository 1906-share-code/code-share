import React, {Component} from 'react'
import {connect} from 'react-redux'
//import connection from '../connect'
import {withRouter} from 'react-router-dom'
import {getDocsThunk, updateDocThunk} from '../store/doc'
import {Container, Form, TextArea, Button} from 'semantic-ui-react'

//Props has username availabe, so why dont we
//make a query to the database to check all documents
//with username and also
//make a thunk that posts new ones and routes to them here

export class MyForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      doc: '',
      userId: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    //stuff
    //this.props.docs()
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('you clicked me')
    //let userId = this.props.props.id
    let userId = this.state.userId
    console.log(userId)
    let docname = this.state.doc
    console.log(docname)
    //console.log(this.state)
    // console.log(this.props.match)
    console.log(this.props)
    //console.log(this.state)
    //this.props.update(userId, docname)

    //this.props.postDoc(userId, docname)
    //this.props.history.push(`/docs/${userId}/${docname}`)
    console.log(this.props.props.history.push(`/docs/${userId}/${docname}`))
  }

  render() {
    let main = (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <TextArea
            className=""
            id="userId"
            name="userId"
            type="text"
            onChange={this.handleChange}
            value={this.state.userId}
            placeholder="Share With"
          />
          <TextArea
            className=""
            id="doc"
            name="doc"
            type="text"
            onChange={this.handleChange}
            value={this.state.doc}
            placeholder="Document Name"
          />

          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Submit"
            label=""
          />
        </Form>
      </Container>
    )

    return main
  }
}

const mapDispatchToProps = dispatch => ({
  update: (userId, docname) => dispatch(updateDocThunk(userId, docname)),
  docs: () => dispatch(getDocsThunk())
})

export default withRouter(connect(null, mapDispatchToProps)(MyForm))
