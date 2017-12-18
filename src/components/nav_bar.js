import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">FCC Voting App</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="#">Polls</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={3} href="#">Login</NavItem>
          <NavItem eventKey={4} href="#">Sign Up</NavItem>
        </Nav>
      </Navbar>
    )
  }
}
