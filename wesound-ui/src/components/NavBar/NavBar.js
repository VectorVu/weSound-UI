import React from 'react';
import {Button, Container,Navbar as bNavBar,} from'react-bootstrap'
import { Nav, NavDropdown, Form, FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './NavBar.css'
export default function NavBar(){


    return(
        <div>
        <bNavBar className='navbar navbar-expand-lg navbar-light bg-light Container-NavBar' bg="light" expand="lg">
                <Container  className='NavBar'>
                <bNavBar.Brand className='NavBar-brand' href="#">
                    <img 
                        src= 'https://a-v2.sndcdn.com/assets/images/peace-cloud-28ad0963.svg'
                        width="64"
                        className="d-inline-block align-top NavBar-logo"
                        alt="React Bootstrap logo"
                    />
                </bNavBar.Brand>
                <bNavBar.Toggle aria-controls="navbarScroll" />
                <bNavBar.Collapse id="navbarScroll" className='NavBar-Collapse'>
                    <Nav
                    className="me-auto my-2 my-lg-0 Navbar-left"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link href="/" className='NavBar-item'>Home</Nav.Link>
                    <Nav.Link href="#action2" className='NavBar-item'>Stream</Nav.Link>
                    <Nav.Link href="#action2" className='NavBar-item'>Library</Nav.Link>
                    
                    <Form className="d-flex NavBar-form">
                        <FormControl
                            type="search"
                            placeholder="Search for artists, bands, tracks, podcasts"
                            aria-label="Search"
                        />
                        <button className='NabBarForm-button'>
                            <img src='https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg' />
                        </button >
                    </Form>
                    </Nav>
                    <NavDropdown title="carosaome" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                        LogOut
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/upload">Upload</Nav.Link>
                    <Nav.Link href="#action2">
                        <img 
                            src='https://a-v2.sndcdn.com/assets/images/activities-66caaa5e.svg'
                        />
                    </Nav.Link>
                    <Nav.Link href="#action2">
                        <img 
                            src='https://a-v2.sndcdn.com/assets/images/messages-f517d0eb.svg'
                        />
                    </Nav.Link>
                </bNavBar.Collapse>
                </Container>
            </bNavBar>
        </div>
  
        
        

    )
}