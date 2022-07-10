import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./style.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

//import logo from "../images/logo.png"

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked:false};
 
  }  
  handleClick = ()=>{
      this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav>
      <div className='logo'>
      <Link className='logo-link' to="/"><h4>Clemmeridian</h4></Link>
      </div>
      <ul className={this.state.clicked ? 'nav-links active': 'nav-links'}>
          <Link className='nav-li' to="/">Home</Link>
          <DropdownButton variant ="" id="dropdown-basic-button" title={<Link className='nav-li' to="/about">Our Company</Link>}>
            <Dropdown.Item><Link className='nav-li' to="/investment" >Investment</Link></Dropdown.Item>
            <Dropdown.Item ><Link className='nav-li' to="/consult" >Consulting</Link></Dropdown.Item>
            <Dropdown.Item><Link className='nav-li' to="/foundation" >Foundation</Link></Dropdown.Item>
        </DropdownButton>
          <Link className='nav-li' to="/services" >Services</Link>
          <Link className='nav-li' to="/contact">Contact</Link>
          
      </ul>
      <div className='hamburger' onClick={this.handleClick}> 
        <i className={this.state.clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars' }></i>
      </div>
    </nav>
    );
  }
}

Navbar.propTypes = {

};

export default Navbar;