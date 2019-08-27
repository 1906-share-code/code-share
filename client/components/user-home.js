import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {Editor} from './Editor'
import {Form} from './Form'

/**
 * COMPONENT
 */

export const UserHome = props => {
  console.log(props)
  const {email} = props
  const username = email.slice(0, email.indexOf('@'))

  return (
    <div>
      <h3>Welcome, {email}</h3>
      {/* <Editor /> */}
      <Form username={username} />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    id: state.user.id,
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
