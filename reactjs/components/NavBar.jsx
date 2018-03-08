import React from "react"
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link, Route } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar>     
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">IdleRagnarok</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            <Link to="/acc_info">Account Info</Link>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Link to="/chars">Chars</Link>
          </NavItem>
          <NavDropdown eventKey={3} title="Mission" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>
              <Link to="/mission">Ongoing Mission</Link>
            </MenuItem>
            <MenuItem eventKey={3.2}>
                <Link to="/mission_list">Missions</Link>
            </MenuItem>
            <MenuItem eventKey={3.3}>Levels</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>
                <Link to="/map">Map</Link>
            </MenuItem>
          </NavDropdown>
          <NavItem eventKey={2} href="#">
            <Link to="/about">About</Link>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}