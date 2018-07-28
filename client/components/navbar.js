import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav className="nav-bar">

      <div className="title">
        <img src='/images/logo.jpg' className="logo-img" />
        <Link to='/home' style={{ textDecoration: 'none', color:'white' }} className="karla-font">
          <h1>
            SUCCULENT SUPPLY
          </h1>
        </Link>
        <img src='/images/logo.jpg' className="logo-img" />
      </div>

      {isLoggedIn ? (
        <div>
          {/* shown after log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick} className="karla-font nav-links">
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* shown before log in */}
          <Link to="/login" className="karla-font nav-links">Login</Link>
          <Link to="/signup" className="karla-font nav-links">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

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

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
