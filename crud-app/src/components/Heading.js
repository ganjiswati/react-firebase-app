import React from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar, NavbarBrand, NavItem} from "reactstrap";

const Heading = () => {
  return (

    <div>
        <Navbar color='dark' dark>
            <NavbarBrand href="/">My Team</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link to='/adduser' className='btn btn-primary'>AddUser</Link>
                </NavItem>
            </Nav>
        </Navbar>

    </div>
  )
}

export default Heading;