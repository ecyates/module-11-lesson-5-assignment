import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'

function NotFound(){
    return(
        <Container fluid className="bg-dark text-white rounded">
            <h1 className="mt-5 pt-3 text-center">Uh-Oh! </h1>
            <div className="mb-3 lead text-center">Looks like you lost your way, as you've stumbled across a 404 Not Found Error.</div>
            <Row className="text-center">
                <Col xs="12">
                    <Image src="/images/not-found.jpg" />
                </Col>
            </Row>
            <Row className="my-5 bg-secondary rounded ">
                <Col xs="4" className="p-2 ">Don't worry...</Col>
                <Col xs="4" className="p-2  text-center">...you're always welcome...</Col>
                <Col xs="4" className="text-end" ><Button to='/' variant='primary'>...back home.</Button></Col>
            </Row>

        </Container>

    )
}

export default NotFound;