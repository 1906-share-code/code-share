import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {Editor} from './Editor'
import {MyForm} from './MyForm'

/**
 * COMPONENT
 */

export const UserHome = props => {
  const {email} = props
  const userId = props.id
  console.log(props)

  return (
    <div>
      <h3>Welcome, {email}</h3>
      {/* <Editor /> */}
      {/* <MyForm userId={userId} /> */}
      <MyForm props={props} />
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
