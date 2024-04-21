import {Button, FloatingLabel, Form} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

const Search = ({onSearchMovies}) => {

    const [inputs, setInputs] = useState({searchString: "", parameter: 's', type: 'movie'});
    const searchMovie = () => {

        let url = `${process.env.REACT_APP_OMDB_URL}?${inputs.parameter}=${inputs.searchString}&apikey=${process.env.REACT_APP_OMDB_APY_KEY}`;
        if (inputs.parameter === 's')
            url = url + `&type=${inputs.type}`;

        axios.get(url)
            .then(response => {
                onSearchMovies(response.data);
            })
            .catch(error => {
                onSearchMovies(error);
            });
    }

    const setParameter = (parameter) => {
        setInputs({...inputs, parameter: parameter});
    }

    const setType = (type) => {
        setInputs({...inputs, type: type});
    }

    // 8.10 - useEffect ???
    // useEffect( () => {
    //     searchMovie('???');
    // }, [] );

    return (
        <>
            <Button onClick={() => setParameter('s')} variant="outline-secondary m-2">S</Button>
            <Button onClick={() => setParameter('t')} variant="outline-secondary m-2">T</Button>
            <Button onClick={() => setParameter('i')} variant="outline-secondary m-2">I</Button>

            <span>parameter: {inputs.parameter}</span>

            {inputs.parameter === 's'
                ? <>
                    <Button onClick={() => setType('movie')} variant="outline-secondary m-2">Movie</Button>
                    <Button onClick={() => setType('series')} variant="outline-secondary m-2">Series</Button>
                    <Button onClick={() => setType('episode')} variant="outline-secondary m-2">Episode</Button>
                    <Button onClick={() => setType('game')} variant="outline-secondary m-2">Game</Button>
                    <span>type: {inputs.type}</span>
                </>
                : null
            }

            <>
                <Form.Group className="my-3">
                <FloatingLabel controlId="floatingInput" label="Search:" className="mb-3">
                    <Form.Control type="text" placeholder="Search"
                                  onKeyUp={e => {
                                      setInputs({...inputs, searchString: e.currentTarget.value});
                                      if (e.key === "Enter") {
                                          searchMovie();
                                      }
                                  }}
                    />
                </FloatingLabel>
                </Form.Group>

                <Button onClick={searchMovie} variant="outline-success" type="button">Search</Button>
            </>
        </>
    );
};

export default Search;