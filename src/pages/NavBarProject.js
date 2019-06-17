import React, { Component } from 'react';
import logo from '../style/img/logo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button } from 'reactstrap';
  import '../style/navbar.scss';



export default class NavBarProject extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isOpen: false
      };
  }

  toggle=()=> {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }


  render() {
    return (
      <div className="warpNavbar">
        <Navbar light  expand="md">
          <NavbarBrand href="/"><img src={logo} alt="logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Buy a Home
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Projects
                  </DropdownItem>
                  <DropdownItem>
                    Subsales
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/">Sell a Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">News & Blogs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Contact us</NavLink>
              </NavItem>
            </Nav>
          <Button className="btn">Join IQI</Button>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

 












  
  

