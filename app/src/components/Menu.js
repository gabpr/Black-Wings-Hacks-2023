import React, { useState } from 'react';
import '../App.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div class="menu">
      <Navbar expand="md">
        <NavbarBrand href="/"><h4>Home</h4></NavbarBrand>
        <NavbarToggler onClick={toggle} class="hamburger"/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/profile/"><h4>Profile</h4></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/settings/"><h4>Settings</h4></NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/settings/"><h4>Inbox</h4></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;