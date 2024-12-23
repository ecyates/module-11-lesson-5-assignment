import { Button, Alert, Container, Modal, ListGroup, ListGroupItem, Image, Card } from 'react-bootstrap';

function Home(){
    return(
        <Container>
            <Card  className="bg-dark text-white rounded m-5 text-center shadow-sm">
                <Card.Title className="m-2"><h1>Welcome to the Comic Book Library!</h1></Card.Title>
                <Card.Text className="m-2">
                Dive into the Marvel universe, where you can explore iconic characters and discover the comic books that bring their stories to life. Search, browse, and immerse yourself in the adventures of your favorite heroes and villains.
                </Card.Text>
                <Card.Img variant="bottom" src="/images/home-page.jpg" alt="Banner Image of Someone Browsing Comic Books"/>
                <Button className="m-2" variant="primary">Shop Now</Button>
            </Card>
        </Container>   
    )
}

export default Home;