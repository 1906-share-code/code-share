import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
  Card,
  Container,
  Header,
  Segment,
  Dimmer,
  Loader
} from 'semantic-ui-react'

import {InputBox} from './InputBox'

/**
 * COMPONENT
 */

export const UserHome = props => {
  const {email} = props

  return (
    <Container textAlign="center" style={{marginTop: '1rem'}}>
      <h3>Welcome, {email}</h3>
      <InputBox />
    </Container>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
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
