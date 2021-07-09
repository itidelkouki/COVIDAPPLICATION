
import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Nav.css';
import { Link } from "react-router-dom";
import { logout } from '../js/actions/authActions';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
const NavMenu = () =>{
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const doctor = useSelector((state) => state.authReducer.doctor);

  const toggle = () => setIsOpen(!isOpen);

  const logoutUser = () => {
    dispatch(logout());
  };
  const authLinks = (
    <div className="doctor-nav">
    <Fragment>
      <NavItem>
      </NavItem>
      <Link to="/">
      <NavLink href="/" onClick={logoutUser}>
        Logout
      </NavLink>
      </Link>
    </Fragment>
    </div>
  );

  const guestLinks = (
    <div classNameName="home">
    <nav className="nav">
    <div className="container">
    <img  style={{width:'80px',height:'80px',borderRadius:'50%'
          
        }}src='https://png.pngtree.com/png-clipart/20200701/original/pngtree-yellow-coronavirus-vector-illustration-png-image_5342658.jpg'/>
      <h1 className="logo"><a href="/">Covid-Care.tn</a></h1>
      <ul>
      <Link to="/">
        <li><a className="current">About us</a></li>
        </Link>
        <li><a href="/services">Ours Services</a></li>
        <Link to="/patient">
        <li><a >For patient</a></li>
        </Link>
        <Link to="/doctors">
        <li><a>For doctor</a></li>
        </Link>
      </ul>
    </div>
  </nav>
  </div>
  );


    return(
      <Navbar  dark expand="sm" className="mb-5">
      <Container>
      <NavbarBrand href="/"></NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isAuth ? authLinks : guestLinks}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
    )};

    export default NavMenu

/* <Link to="/doctordashboard">
          <span className="navbar-text mr-3">
            <strong>{doctor ? `Welcome ${doctor.name}` : null}</strong>
          </span>
        </Link>*/