
import {useState} from "react";
import MovieDetails from "../Templates/Snippets/MovieDetails";
import Search from "../Components/Search";
import SearchResults from "../Templates/SearchResults";

const Home = () => {

    const [movies, setMovies] = useState({});

    return (

        <div className="container">

            <h2>OMDB - Movies</h2>
            <hr/>

            <Search onSearchMovies={results => setMovies(results)}/>

            <hr/>

            {(movies.hasOwnProperty("Search"))
                ? <SearchResults moviesList={movies} />
                : <MovieDetails movieDetails={movies} />
            }

            <pre>{JSON.stringify(movies, null, 4)}</pre>

        </div>
    );
}

export default Home;