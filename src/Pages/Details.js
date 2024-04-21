import {useParams} from "react-router-dom";
import {Card, CardGroup} from "react-bootstrap";
import axios from "axios";
import {useState} from "react";


const Details = () => {

    const { imdbID } = useParams();
    const [resp, setResp] = useState({});
    const url = `${process.env.REACT_APP_OMDB_URL}?i=${imdbID}&apikey=${process.env.REACT_APP_OMDB_APY_KEY}`;

    axios.get(url)
        .then(response => {
            setResp(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });

    return (
        <div className="container">
            <h2>OMDB - Movie Details</h2>
            <hr/>
            <a className="btn btn-outline-primary mb-3" href="/">Home</a>
            <hr/>

            <CardGroup>
                <Card>
                    <Card.Header>
                        <h2>{resp.Title}</h2>
                        <h4>{resp.Actors}</h4>
                    </Card.Header>
                    <Card.Img variant="top" src={resp.Poster}/>
                    <Card.Body>
                        <Card.Text>{resp.Plot}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Title>imdbID: {resp.imdbID}</Card.Title>
                        <Card.Subtitle>Type: {resp.Type} - Year: {resp.Year}</Card.Subtitle>
                        <Card.Subtitle>Genre: {resp.Genre}</Card.Subtitle>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </div>
    )
}

export default Details;