import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Nav>
        <NavItem>
          <NavLink><Link to="/">Home</Link></NavLink>
        </NavItem>
        <NavItem>
        <NavLink><Link to="/docs">Docs</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/donategoldme">Github</NavLink>
        </NavItem>
      </Nav>
    );
  }
}