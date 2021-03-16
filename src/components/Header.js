import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
    return (
        <div>
         <Navbar expand="lg" variant="dark" bg="dark">
            <Navbar.Brand href="#">UNIO Labs</Navbar.Brand>
          </Navbar>
        </div>
    );
}

export default Header;