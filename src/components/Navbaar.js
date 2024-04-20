import React, { useState } from 'react';
import { Navbar, Container, Button, Dropdown } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa'; 


const Navbaar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    return (
        <Navbar expand="lg" bg="light" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className='text-dark'>
                    <img
                        alt=""
                        src="" 
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    Company
                </Navbar.Brand>
                <div className="ms-auto">
                    {isLoggedIn ? (
                        <Dropdown align="end">
                            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className='text-dark'>
                                <FaUser />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu-end">
                                <Dropdown.Item href="#profile">My Profile</Dropdown.Item>
                                <Dropdown.Item href="#bookings">My Bookings</Dropdown.Item>
                                <Dropdown.Item href="#cars">My Cars</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#logout" onClick={handleLogoutClick}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                            
                                <Button variant="outline-primary" onClick={handleLoginClick}>Login/Signup</Button>
                            
                    )}
                </div>
            </Container>
        </Navbar>
    );
}

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleClick = (e) => {
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
        onClick(e);
    };

    return (
        <Button
            ref={ref}
            onClick={handleToggleClick}
            className={`btn-circle ${isDropdownOpen ? 'dropdown show' : 'dropdown'}`}
        >
            {children} 
        </Button>

    );
});


export default Navbaar;
