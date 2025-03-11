import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiKey, hash } from './ApiPasswords';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Image, Pagination, Row, Col } from 'react-bootstrap';


const CharacterList = () => {
    // Instantiate the list of characters and the 'offset' which refers to where the list of characters will begin
    const [characters,setCharacters] = useState([]);
    const [offset, setOffset] = useState(0);
    const navigate = useNavigate();

    // Refetch whenever offset changes
    useEffect(() => {
        fetchCharacters();
    }, [offset]); 
    
    // Fetch the characters and set the list
    const fetchCharacters = async () => {
        try {
            setCharacters([]); // Clear existing characters to indicate loading
            const response = await axios.get(
                `https://gateway.marvel.com/v1/public/characters?ts=1&offset=${offset}&apikey=${apiKey}&hash=${hash}`
            );
            setCharacters(response.data.data.results);
        } catch (error) {
            console.error("Error getting the character data: ", error);
            alert('Error fetching the characters, check console for details.')
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
            <h1 className="text-center bg-primary text-light p-3 rounded">Marvel Characters</h1>
            {/* Using cards in Bootstrap, we're adding the thumbnail and name from the API for each character */}
            <Row>
                {characters.length>0 ?
                    (characters.map(character => (
                        <Col xs="4" key={character.id}>
                            <a  href={'#character-detail'}  onClick={() => navigate(`/characters/${character.id}`)}>
                            <Card className="m-3 text-center bg-secondary text-white cardHover">
                                <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} style={{height:300}} alt={`${character.name} Image`}/>
                                <Card.Title>
                                    {character.name}
                                </Card.Title>
                            </Card>
                            </a>
                        </Col>
                    ))) : 
                    <h1> Loading characters....</h1>
                }
            </Row>
                {/* Once loaded, the Next/Previous navigation buttons will also appear */}
                {characters.length >0 ?
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

export default CharacterList;