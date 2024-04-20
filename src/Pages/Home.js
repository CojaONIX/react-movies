
import {useState} from "react";
import SearchMovies from "../Components/SearchMovies";
import MovieDetailsLong from "../Templates/Snippets/MovieDetailsLong";
import MovieList from "../Components/MovieList";

const Home = () => {

    const [movies, setMovies] = useState({});

    return (

        <div className="container">

            <h2>OMDB - Movies</h2>
            <hr/>

            <SearchMovies onSearchMovies={results => setMovies(results)}/>

            <hr/>

            {(movies.hasOwnProperty("Search"))
                ? <MovieList moviesList={movies} />
                : <MovieDetailsLong movieDetails={movies} />
            }

            <pre>{JSON.stringify(movies, null, 4)}</pre>

        </div>
    );
}

export default Home;