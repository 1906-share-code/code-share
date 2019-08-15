import React from 'react'
//import PropTypes from 'prop-types'
//import {connect} from 'react-redux'

// export const InputBox = props => {
//   return (
//     <div>
//       <h3>Not yet an input box but I exist to try and test if sharedb works</h3>
//       <input
//         type="text"
//         value="Some value" //{this.state.value}
//         onChange="" //{this.handleChange}
//       />
//     </div>
//   )
// }

export class InputBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: 'some string'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      //[event.target.name]: event.target.value
      inputValue: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    let main = (
      <div>
        <h3>
          Not yet an input box but I exist to try and test if sharedb works
        </h3>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>{this.state.inputValue}</p>
      </div>
    )

    return main
  }
}
