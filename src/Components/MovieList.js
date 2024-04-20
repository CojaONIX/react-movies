import MovieDetailsShort from "../Templates/Snippets/MovieDetailsShort";

const MovieList = ({moviesList}) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                moviesList.Search.map((movie) => {
                    return (
                        <MovieDetailsShort movie={movie} />
                    )
                })
            }
        </div>
    )
}

export default MovieList;