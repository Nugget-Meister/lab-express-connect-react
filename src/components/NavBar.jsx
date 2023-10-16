import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const NavBar = () => {
    return (
        <div className='Navbar'>
            <Navbar className='bg-body-secondary'>
                <Container className="justify-content-start">
                    <Navbar.Brand >
                        <span> Captain's Log </span>
                    </Navbar.Brand>
                    <Nav.Link href="/" className='p-3'>
                        Home
                    </Nav.Link>
                    <Nav.Link href="/logs">
                        All Logs
                    </Nav.Link>
                </Container> 
                <Nav.Link href="/new">
                    <Button className="justify-content-end">
                        New Log
                    </Button>
                </Nav.Link>
            </Navbar>
        </div>
    );
}

export default NavBar;
