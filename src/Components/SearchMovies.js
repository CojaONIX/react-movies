import {useState} from "react";
import axios from "axios";

const SearchMovies = ({onSearchMovies}) => {

    const [inputs, setInputs] = useState({searchString: "", parameter: 's', type: 'movie'});
    const searchMovie = () => {

        let url = `${process.env.REACT_APP_OMDB_URL}?${inputs.parameter}=${inputs.searchString}&apikey=${process.env.REACT_APP_OMDB_APY_KEY}`;
        if(inputs.parameter === 's')
            url = url + `&type=${inputs.type}`;
        console.log(url);

        axios.get(url)
            .then(response => {
                console.log(response.data);
                onSearchMovies(response.data);
            })
            .catch(error => {
                console.log(error);
                onSearchMovies(error);
            });
    }

    const setParameter = (parameter) => {
        setInputs({...inputs, parameter: parameter});
    }

    const setType = (type) => {
        setInputs({...inputs, type: type});
    }

    return (
        <>
            <button onClick={() => setParameter('s')} className="btn btn-outline-secondary m-2">S</button>
            <button onClick={() => setParameter('t')} className="btn btn-outline-secondary m-2">T</button>
            <button onClick={() => setParameter('i')} className="btn btn-outline-secondary m-2">I</button>

            <span>parameter: {inputs.parameter}</span>

            {inputs.parameter === 's'
                ? <>
                    <button onClick={() => setType('movie')} className="btn btn-outline-secondary m-2">Movie</button>
                    <button onClick={() => setType('series')} className="btn btn-outline-secondary m-2">Series</button>
                    <button onClick={() => setType('episode')} className="btn btn-outline-secondary m-2">Episode</button>
                    <button onClick={() => setType('game')} className="btn btn-outline-secondary m-2">Game</button>
                    <span>type: {inputs.type}</span>
                  </>
                : null
            }


            <div className="col-md-4">
                <label className="form-label">Search:</label>
                <input className="form-control mb-3" type="text" name="search" autoFocus
                       onKeyUp={e => {
                           setInputs({...inputs, searchString: e.currentTarget.value});
                           if (e.key === "Enter") {
                               searchMovie();
                           }
                       }}
                />

                <button onClick={searchMovie} type="button" className="btn btn-outline-primary">Search Movies</button>

            </div>
        </>
    )
}

export default SearchMovies;