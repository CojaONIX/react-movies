import {Button, Card, CardGroup} from "react-bootstrap";


const SearchResults = ({moviesList}) => {

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                moviesList.Search.map((movie) => {
                    return (
                        <CardGroup>
                            <Card>
                                <Card.Header>
                                    <h5>{movie.Title}</h5>
                                </Card.Header>
                                <Card.Img variant="top" src={movie.Poster}/>
                                <Card.Body>
                                    <Card.Text>Type: {movie.Type}</Card.Text>
                                    <Card.Text>Year: {movie.Year}</Card.Text>
                                    <Card.Title>imdbID: {movie.imdbID}</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <a href={'/details/' + movie.imdbID} className="btn btn-outline-primary">Details</a>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    )
                })
            }
        </div>

    );
}

export default SearchResults;