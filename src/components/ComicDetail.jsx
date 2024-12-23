import { useEffect, useState } from "react";
import axios from 'axios';
import { apiKey, hash } from './ApiPasswords';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Pagination, Card, Row, Col, Image } from 'react-bootstrap';

const ComicDetail = () => {
    // Instantiate the comic details
    const [comicDeets, setComicDeets] = useState([]);
    const [characterData, setCharacterData] = useState([]);
    const [offset, setOffset] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();


    // Initiated when selected comic changes
    useEffect(() => {
        const fetchComicDetails = async () => {
            try {
                setCharacterData([]);

                // Fetch comic details and set them
                const response = await axios.get(
                    `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=${apiKey}&hash=${hash}`
                );
                const comic = response.data.data.results[0];
                setComicDeets(comic);

                // Fetch comics if collectionURI exists and set them
                const apiURL = comic?.characters?.collectionURI || null;
                if (apiURL) {
                    const characterResponse = await axios.get(
                        `${apiURL}?ts=1&offset=${offset}&apikey=${apiKey}&hash=${hash}`
                    );
                    setCharacterData(characterResponse.data.data.results);
                }
            } catch (error) {
                console.error("Error fetching comic details data: ", error);
                alert('Error fetching comic details, see console for details.')
            }
        };
    
        if (id) {
            fetchComicDetails();
        }
    }, [id, offset]); 

    // The offset increments by 20, so next adds 20 and previous subtracts 20
    const nextOffset = () => {
        setOffset((prevOffset) => prevOffset + 20);
    };

    const previousOffset = () => {
        setOffset((prevOffset) => prevOffset - 20);
    }; 

    return (
        <Container fluid className="my-3" id='comic-detail'>
            <h1 className="text-center bg-primary text-light p-3 rounded">Comic Details</h1>
            {/* The Comic Details section displays the name, thumbnail, and description (if available). */}
            <Card className="bg-secondary text-white mt-3 p-5 text-center">
                {comicDeets && comicDeets.thumbnail ? (
                    <>
                        <Card.Title><h1>{comicDeets.title}</h1></Card.Title>

                        <Image    src={`${comicDeets.thumbnail.path}.${comicDeets.thumbnail.extension}`} 
                                className="card-img-top rounded" 
                                alt={`${comicDeets.title} Image`}/>
                        <Card.Body>
                            {comicDeets.description && comicDeets.description !== "" ? (
                                <p className="mt-3">{comicDeets.description}</p>
                            ) : (
                                <p>No description available.</p>
                            )}
                        </Card.Body>
                    </>
                ) : (
                    <h1>Loading comic details...</h1>
                )}
                </Card>
                {/* And it displays the characters (if available) with their thumbnail, name, and description (if available) up to 20 characters. */}
                <Card className="my-5 bg-secondary text-white p-5" id="character-list">
                {characterData.length > 0 ? (
                    <>
                    <Card.Title className="text-center"><h2>Featured Characters</h2></Card.Title>
                    <Row>
                    {characterData.map(character => (
                            <Col xs="4" key={character.id} href={'#character-detail'} onClick={() => navigate(`/characters/${character.id}`)}>
                                        <Card className="m-3 text-center cardHover">
                                            <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} style={{height:300}} className={"card-img-top rounded"} alt={`${character.name} Image`}/>
                                            <Card.Body>
                                                <Card.Title>{character.name}</Card.Title>
                                                {character.description && character.description !== "" ? 
                                                (<Card.Text>{character.description}</Card.Text>) : 
                                                (<Card.Text>No description available.</Card.Text>) }
                                            </Card.Body>
                                        </Card>
                            </Col>
                        ))}
                    </Row>
                    </> 
                ) : (
                    <h2>Loading character list...</h2>
                )}
                <Button className="btn btn-primary mt-5" onClick={() => navigate('/comics/')}>Back to Browse</Button>
                {characterData.length > 0 ?
                    <div className="d-flex bg-dark justify-content-center mt-4 pt-3">
                        <Pagination>
                            {offset==0 ? 
                                (<Pagination.Item className="btn btn-primary m-3" xs="lg"disabled>Previous</Pagination.Item>) : 
                                (<Pagination.Item className="btn btn-primary m-3" xs="lg" onClick={() => previousOffset()}>Previous</Pagination.Item>)
                            }
                            {offset>=(comicDeets.characters.available-20) ? 
                                (<Pagination.Item className="btn btn-primary m-3" xs="lg"disabled>Next</Pagination.Item>) : 
                                (<Pagination.Item className="btn btn-primary m-3" xs="lg"onClick={() => nextOffset()}>Next</Pagination.Item>)
                            }
                        </Pagination>
                    </div>
                : null}     
            </Card>
        </Container>
    );
}

export default ComicDetail;