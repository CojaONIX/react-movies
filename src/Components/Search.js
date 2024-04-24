import {Button, FloatingLabel, Form} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

const Search = ({onSearchMovies}) => {

    const [inputs, setInputs] = useState({searchString: "", type: 'movie'});
    const searchMovie = () => {

        let url = `${process.env.REACT_APP_OMDB_URL}?s=${inputs.searchString}&type=${inputs.type}&apikey=${process.env.REACT_APP_OMDB_APY_KEY}`;

        axios.get(url)
            .then(response => {
                onSearchMovies(response.data);
            })
            .catch(error => {
                onSearchMovies(error);
            });
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
            <Button onClick={() => setType('movie')} variant='outline-secondary m-2' className={inputs.type === 'movie' ? 'active' : null}>Movie</Button>
            <Button onClick={() => setType('series')} variant='outline-secondary m-2' className={inputs.type === 'series' ? 'active' : null}>Series</Button>
            <Button onClick={() => setType('game')} variant='outline-secondary m-2' className={inputs.type === 'game' ? 'active' : null}>Game</Button>

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
    );
};

export default Search;