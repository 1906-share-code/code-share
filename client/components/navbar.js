import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
//import {Container} from 'semantic-ui-react'

//import {DesktopNav, MobileNav} from './index'

import {Button, Header, Icon, Segment} from 'semantic-ui-react'

const Navbar = ({handleClick, isLoggedIn}) => (
  <Segment placeholder>
    <Header>Code Share App</Header>
    <nav>
      {isLoggedIn ? (
        <Segment.Inline>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </Segment.Inline>
      ) : (
        <Segment.Inline>
          {/* The navbar will show these links before you log in */}
          <Button>
            <Link to="/login">Login</Link>
          </Button>
          <Button>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </Segment.Inline>
      )}
    </nav>
    <hr />
  </Segment>
)

//const Navbar = ({handleClick, isLoggedIn, children, firstName}) => (
//   <Container>
//     <DesktopNav
//       handleClick={handleClick}
//       isLoggedIn={isLoggedIn}
//       firstName={firstName}
//     >
//       {children}
//     </DesktopNav>
//     <MobileNav
//       handleClick={handleClick}
//       isLoggedIn={isLoggedIn}
//       firstName={firstName}
//     >
//       {children}
//     </MobileNav>
//   </Container>
// )

// Navbar.propTypes = {
//   children: PropTypes.node
// }

// const Navbar = ({handleClick, isLoggedIn}) => (
//   <Container textAlign="center" style={{marginTop: '1rem'}}>
//     <h1>code-share App</h1>
//     <nav>
//       {isLoggedIn ? (
//         <div>
//           {/* The navbar will show these links after you log in */}
//           <Link to="/home">Home</Link>
//           <a href="#" onClick={handleClick}>
//             Logout
//           </a>
//         </div>
//       ) : (
//         <div>
//           {/* The navbar will show these links before you log in */}
//           <Link to="/login">Login</Link>
//           <Link to="/signup">Sign Up</Link>
//         </div>
//       )}
//     </nav>
//     <hr />
//   </Container>
// )

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
