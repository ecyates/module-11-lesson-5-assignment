import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar(){

    return(

        
            <Navbar bg="dark" expand="lg" data-bs-theme="dark">
                <Navbar.Brand href="/">Comic Book Library</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto p-3">
                        <Nav.Link as={NavLink} to="/" activeClassName='active'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/characters/" activeClassName='active'>Browse Characters</Nav.Link>
                        <Nav.Link as={NavLink} to="/comics/" activeClassName='active'>Browse Comics</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
    
            </Navbar>
    )
}

export default NavBar;