import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

const Certificates = () => {
    return (
        <div className='m-auto' style={{ position: 'sticky', top: '0', width: '100%' }}>
            {/* <Navbar sticky='top' collapseOnSelect expand="lg" bg='' variant="dark" style={{ backgroundColor: "rgb(200, 20, 41)", marginBottom: '0' }}>
                <Container >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto m-auto">
                            <Link to="/certificates/cert1">Starters</Link>
                            <Nav.Link href="#features">Movers</Nav.Link>
                            <Nav.Link href="#teaching">Flyers</Nav.Link>
                            <Nav.Link href="/certificates">KET</Nav.Link>
                            <Nav.Link href="/">PET</Nav.Link>
                            <Nav.Link href="#faq">FCE</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar > */}
            <nav className='inner-nav px-2'>
                <Link className='inner-link my-auto' to='starters'>Starters</Link>
                <Link className='inner-link my-auto' to='movers'>Movers</Link>
                <Link className='inner-link my-auto' to='flyers'>Flyers</Link>
                <Link className='inner-link my-auto' to='ket'>KET</Link>
                <Link className='inner-link my-auto' to='pet'>PET</Link>
                <Link className='inner-link my-auto' to='fce'>FCE</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Certificates