import React from 'react';
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
  DropdownItem } from 'reactstrap';
  import { BrowserRouter as Router, Route, Switch ,Link } from 'react-router-dom';


export default class Example extends React.Component {
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
      <div>
        <Navbar className='navbar' expand="md">
          <NavbarBrand className='navName' href="/">ReactLocator</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown>
                      <DropdownToggle style={{fontSize:'1.2em'}} caret>
                        Filter
                      </DropdownToggle>
                      <DropdownMenu>
                    <DropdownItem tag="a" href="/eightteen" active>1-18</DropdownItem>
                    <DropdownItem tag="a" href="/twentyfive" >19-25</DropdownItem>
                    <DropdownItem tag="a" href="/thirtyfive" >26-35</DropdownItem>
                    <DropdownItem tag="a" href="/fourtyfive" >36-45</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
          
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
