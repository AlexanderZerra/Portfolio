import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/bio">Bio</NavLink>
          <NavLink to="/links">My Links</NavLink>
          <NavLink to="/work">My Work</NavLink>
        </div>
      </nav>
    )
  }
}
