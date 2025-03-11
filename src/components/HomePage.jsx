import { Button, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    return(
        <Container>
            <Card  className="bg-dark text-white rounded m-5 text-center shadow-sm">
                <Card.Title className="m-2"><h1>Welcome to the Comic Book Library!</h1></Card.Title>
                <Card.Text className="m-2">
                Dive into the Marvel universe, where you can explore iconic characters and discover the comic books that bring their stories to life. Search, browse, and immerse yourself in the adventures of your favorite heroes and villains.
                </Card.Text>
                <Card.Img variant="bottom" src="/images/home-page.jpg" alt="Banner Image of Someone Browsing Comic Books"/>
                <div className='my-2'>
                    <Button onClick={()=>navigate('/characters/')} className="m-2" variant="primary">Browse Characters</Button>
                    <Button onClick={()=>navigate('/comics/')} className="m-2" variant="secondary">Browse Comics</Button>
                </div>
            </Card>
        </Container>   
    )
}

export default Home;