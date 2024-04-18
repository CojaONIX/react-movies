
import {useState} from "react";
import axios from "axios";


const Home = () => {

    const [movies, setMovies] = useState({});
    const [parameter, setParameter] = useState('s');

    const searchMovie = (searchString) => {
        axios.get(process.env.REACT_APP_OMDB_URL + '?' + parameter +'=' + searchString + '&apikey=' + process.env.REACT_APP_OMDB_APY_KEY)
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <h2>OMDB - Movies</h2>
            <hr/>
            <div className="col-md-4">
                <label className="form-label">Search (parameter {parameter}):</label>

                <button onClick={(e) => setParameter('s')} className="btn btn-outline-secondary m-2">S</button>
                <button onClick={(e) => setParameter('t')} className="btn btn-outline-secondary m-2">T</button>

                <input onKeyUp={(e) => {if (e.key === "Enter") searchMovie(e.currentTarget.value);}}
                       className="form-control mb-3" type="text" name="search" autoFocus
                />

            </div>
            <hr/>

            <pre>{JSON.stringify(movies, null, 4)}</pre>

        </div>
    );
}

export default Home;