
import {useState} from "react";
import SearchMovies from "../Components/SearchMovies";


const Home = () => {

    const [movies, setMovies] = useState({});

    return (
        <div className="container">
            <h2>OMDB - Movies</h2>
            <hr/>

            <SearchMovies onSearchMovies={results => setMovies(results)} />

            <hr/>

            <pre>{JSON.stringify(movies, null, 4)}</pre>

        </div>
    );
}

export default Home;