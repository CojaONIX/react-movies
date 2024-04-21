import {Button, Card, CardGroup} from "react-bootstrap";


const MovieDetails = ({movieDetails}) => {
    return (
        <CardGroup>
            <Card>
                <Card.Header>
                    <h2>{movieDetails.Title}</h2>
                    <h4>{movieDetails.Actors}</h4>
                </Card.Header>
                <Card.Img variant="top" src={movieDetails.Poster}/>
                <Card.Body>
                    <Card.Text>{movieDetails.Plot}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-primary" type="button">X</Button>
                    <Card.Title>imdbID: {movieDetails.imdbID}</Card.Title>
                    <Card.Subtitle>Type: {movieDetails.Type} - Year: {movieDetails.Year}</Card.Subtitle>
                    <Card.Subtitle>Genre: {movieDetails.Genre}</Card.Subtitle>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default MovieDetails;