
const MovieList = ({moviesList}) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                moviesList.Search.map((movie) => {
                    return (
                        <div className="card-group">
                            <div className="card">

                                <div className="card-header d-flex justify-content-between">
                                    <h5>{movie.Title}</h5>
                                </div>

                                <img src={movie.Poster} className="card-img-top" alt="..."/>

                                <div className="card-body">
                                    <h5>Type: {movie.Type}</h5>
                                    <h5>Year: {movie.Year}</h5>
                                    <h5>imdbID: {movie.imdbID}</h5>
                                </div>

                                <div className="card-footer d-flex justify-content-end">
                                    <a href={'/video/'} className="btn btn-outline-primary">Details&Play</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MovieList;