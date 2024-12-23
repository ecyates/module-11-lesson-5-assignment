import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiKey, hash } from './ApiPasswords';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Image, Pagination, Row, Col } from 'react-bootstrap';

const ComicList = () => {
    // Instantiate the list of comics and the 'offset' which refers to where the list of comics will begin
    const [comics,setComics] = useState([]);
    const [offset, setOffset] = useState(0);
    const navigate = useNavigate();

    // Refetch whenever offset changes
    useEffect(() => {
        fetchComics();
    }, [offset]); 
    
    // Fetch the comics and set the list
    const fetchComics = async () => {
        try {
            setComics([]); // Clear existing comics to indicate loading
            const response = await axios.get(
                `https://gateway.marvel.com/v1/public/comics?ts=1&offset=${offset}&apikey=${apiKey}&hash=${hash}`
            );
            setComics(response.data.data.results);
        } catch (error) {
            console.error("Error getting the comics data: ", error);
            alert('Error fetching the comics, check console for details.')
        }
    };
    
    // The offset increments by 20, so next adds 20 and previous subtracts 20
    const nextOffset = () => {
        setOffset((prevOffset) => prevOffset + 20);
    };
    
    const previousOffset = () => {
        setOffset((prevOffset) => prevOffset - 20);
    };    

    return (
        <Container fluid className="my-3">
            <h1 className="text-center bg-primary text-light p-3 rounded">Marvel Comics</h1>
            {/* Using cards in Bootstrap, we're adding the thumbnail and name from the API for each comic */}
            <Row>
                {comics.length>0 ?
                    (comics.map(comic => (
                        <Col xs="4">
                            <a key={comic.id} href={'#comic-detail'}  onClick={() => navigate(`/comics/${comic.id}`)}>
                            <Card className="m-3 text-center bg-secondary text-white cardHover">
                                <Image src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} style={{height:300}} alt={`${comic.title} Image`}/>
                                <Card.Title>
                                    {comic.title}
                                </Card.Title>
                            </Card>
                            </a>
                        </Col>
                    ))) : 
                    <h1> Loading comics....</h1>
                }
            </Row>
                {/* Once loaded, the Next/Previous navigation buttons will also appear */}
                {comics.length >0 ?
                    <div className="d-flex bg-dark justify-content-center mt-4 pt-3">
                        <Pagination>
                            {offset==0 ? 
                                (<Pagination.Item className="btn btn-primary m-3" xs="lg"disabled>Previous</Pagination.Item>) : 
                                (<Pagination.Item className="btn btn-primary m-3" xs="lg" onClick={() => previousOffset()}>Previous</Pagination.Item>)
                            }
                            {offset>=1544 ? 
                                (<Pagination.Item className="btn btn-primary m-3" xs="lg"disabled>Next</Pagination.Item>) : 
                                (<Pagination.Item className="btn btn-primary m-3" xs="lg"onClick={() => nextOffset()}>Next</Pagination.Item>)
                            }
                        </Pagination>
                    </div>
                : null}
        </Container>
    );
}

export default ComicList;